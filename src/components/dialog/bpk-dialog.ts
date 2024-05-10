import { CSSResult, CSSResultGroup, LitElement, TemplateResult, css, html, unsafeCSS } from "lit";
import { customElement, property, query } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { styles } from "./bpk-dialog-styles";

@customElement("bpk-dialog")
export default class BPKDialog extends LitElement {
  @property({
    type: Boolean,
    reflect: true,
    hasChanged(newVal: boolean, oldVal: boolean | undefined) {
      if (newVal === false && oldVal === undefined) {
        return false;
      }
      return newVal !== oldVal;
    },
  })
  open = true;

  @property({ type: String }) modalTitle?: string;
  @property({ type: String }) containerClass?: string;

  static get styles(): CSSResultGroup {
    console.log(styles);

    return css`
      ${styles}
    `;
  }

  @query(".dialog") private dialog: HTMLDialogElement;

  toggle() {
    const eventName = this.open ? "onOpen" : "onClose";
    const event = new CustomEvent(eventName, { bubbles: true, composed: true });
    this.dispatchEvent(event);

    this.open = !this.open;
  }

  close() {
    const event = new CustomEvent("onClose", { bubbles: true, composed: true });
    this.dispatchEvent(event);
    this.open = false;
  }

  show() {
    const event = new CustomEvent("onOpen", { bubbles: true, composed: true });
    this.dispatchEvent(event);
    this.open = true;
  }

  private createContainer() {
    const classes: { [key: string]: boolean } = {
      "container": true,
    };

    if (this.containerClass) {
      classes[this.containerClass] = !!this.containerClass;
    }

    const title = this.modalTitle ? html`<h1 class="dialog-title">${this.modalTitle}</h1>` : "";

    const header = html`<header class="dialog-header">
      ${title}
      <button class="dialog-close-button js-dialog-close-button">×</button>
    </header> `;

    return html`<div class="${classMap(classes)}">
      ${header}
      <section class="dialog-content"><slot></slot></section>
    </div>`;
  }

  render(): TemplateResult {
    return html`<dialog id="dialog" class="dialog">${this.createContainer()}</dialog>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "bpk-dialog": BPKDialog;
  }
}

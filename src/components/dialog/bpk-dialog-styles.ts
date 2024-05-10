import { css } from "lit";

export const styles = css`
  :host {
    display: contents;
  }

  :host([open]) .dialog {
    display: flex;
  }

  .container {
    --background-color: var(--bpk-color-primary);

    display: flex;
    flex-direction: column;
    background: var(--background-color);
    max-width: 100%;
    max-height: 50vh;
    min-width: 424px;
    padding: 0;
    border: 0;
    border-radius: 4px;
  }

  .dialog {
    padding: 0;
    border: 0;
    border-radius: 1px;
  }

  .dialog::backdrop {
    background-color: #273142b3;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    padding: 10px;
  }

  header button {
    margin-left: auto;
  }

  header h1 {
    margin: 0px;
    font-size: 20px;
    text-transform: capitalize;
    font-weight: 500;
  }

  .content {
    padding: var(--bl-size-xl);
    overflow: auto;
  }

  @media only screen and (max-width: 471px) {
    .container {
      max-width: 70vw;
      max-height: 70vw;
      min-width: auto;
      min-height: auto;
    }
  }
`;

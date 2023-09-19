import express from 'express';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();
    this.config();
  }

  private config(): void {
    this.app.use(express.json());
  }

  public start(PORT: string | number): void {
    this.app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  }
}

export { App }
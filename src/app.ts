import express from 'express';
import cors from 'cors';
import compression from 'compression';
import helmet from 'helmet';
import { StatusCodes } from 'http-status-codes';
import routes from './api/v1/domains/user';

class App {
  constructor(PORT: Number) {

    const app = express();

    app.use(express.json());
    app.use(cors());
    app.use(compression());
    app.use(helmet());
    app.use(routes);

    app.get('/', (req: express.Request, res: express.Response) => {
      res.status(StatusCodes.OK).json({
        name: 'it s alive',
        last_update: new Date()
      });
    });

    app.listen(PORT, () => console.log('App running on port', PORT));
  }
};

export default App;

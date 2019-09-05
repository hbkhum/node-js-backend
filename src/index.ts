import { App} from './app';
import { createConnection, getManager } from 'typeorm';


async function main(){
    const app = new App();
    await app.listen();
}

main();
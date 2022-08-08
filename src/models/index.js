// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { LastNamesAll, FirstNamesAll } = initSchema(schema);

export {
  LastNamesAll,
  FirstNamesAll
};
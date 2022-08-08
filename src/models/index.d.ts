import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type LastNamesAllMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type FirstNamesAllMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class LastNamesAll {
  readonly id: string;
  readonly all_last?: string | null;
  readonly persian_last?: string | null;
  readonly arab_last?: string | null;
  readonly kurmanji_last?: string | null;
  readonly pakistani_last?: string | null;
  readonly sorani_last?: string | null;
  readonly turkish_last?: string | null;
  readonly ukrainian_last?: string | null;
  readonly german_last?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<LastNamesAll, LastNamesAllMetaData>);
  static copyOf(source: LastNamesAll, mutator: (draft: MutableModel<LastNamesAll, LastNamesAllMetaData>) => MutableModel<LastNamesAll, LastNamesAllMetaData> | void): LastNamesAll;
}

export declare class FirstNamesAll {
  readonly id: string;
  readonly all_first: string;
  readonly persian_first?: string | null;
  readonly arab_first?: string | null;
  readonly kurmanji_first?: string | null;
  readonly pakistani_first?: string | null;
  readonly sorani_first?: string | null;
  readonly turkish_first?: string | null;
  readonly ukrainian_first?: string | null;
  readonly german_first?: string | null;
  readonly gender_first?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<FirstNamesAll, FirstNamesAllMetaData>);
  static copyOf(source: FirstNamesAll, mutator: (draft: MutableModel<FirstNamesAll, FirstNamesAllMetaData>) => MutableModel<FirstNamesAll, FirstNamesAllMetaData> | void): FirstNamesAll;
}
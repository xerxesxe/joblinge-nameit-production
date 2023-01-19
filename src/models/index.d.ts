import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

type LastNamesAllMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type FirstNamesAllMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerLastNamesAll = {
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
}

type LazyLastNamesAll = {
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
}

export declare type LastNamesAll = LazyLoading extends LazyLoadingDisabled ? EagerLastNamesAll : LazyLastNamesAll

export declare const LastNamesAll: (new (init: ModelInit<LastNamesAll, LastNamesAllMetaData>) => LastNamesAll) & {
  copyOf(source: LastNamesAll, mutator: (draft: MutableModel<LastNamesAll, LastNamesAllMetaData>) => MutableModel<LastNamesAll, LastNamesAllMetaData> | void): LastNamesAll;
}

type EagerFirstNamesAll = {
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
}

type LazyFirstNamesAll = {
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
}

export declare type FirstNamesAll = LazyLoading extends LazyLoadingDisabled ? EagerFirstNamesAll : LazyFirstNamesAll

export declare const FirstNamesAll: (new (init: ModelInit<FirstNamesAll, FirstNamesAllMetaData>) => FirstNamesAll) & {
  copyOf(source: FirstNamesAll, mutator: (draft: MutableModel<FirstNamesAll, FirstNamesAllMetaData>) => MutableModel<FirstNamesAll, FirstNamesAllMetaData> | void): FirstNamesAll;
}
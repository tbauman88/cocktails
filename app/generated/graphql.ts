export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  bigint: { input: number; output: number; }
  smallint: { input: number; output: number; }
  timestamp: { input: string; output: string; }
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type BooleanComparisonExp = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _gt?: InputMaybe<Scalars['Boolean']['input']>;
  _gte?: InputMaybe<Scalars['Boolean']['input']>;
  _in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Boolean']['input']>;
  _lte?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type IntComparisonExp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type StringComparisonExp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type BigintComparisonExp = {
  _eq?: InputMaybe<Scalars['bigint']['input']>;
  _gt?: InputMaybe<Scalars['bigint']['input']>;
  _gte?: InputMaybe<Scalars['bigint']['input']>;
  _in?: InputMaybe<Array<Scalars['bigint']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['bigint']['input']>;
  _lte?: InputMaybe<Scalars['bigint']['input']>;
  _neq?: InputMaybe<Scalars['bigint']['input']>;
  _nin?: InputMaybe<Array<Scalars['bigint']['input']>>;
};

/** ordering argument of a cursor */
export enum CursorOrdering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** columns and relationships of "drink_ingredients" */
export type DrinkIngredients = {
  __typename?: 'drink_ingredients';
  amount: Scalars['String']['output'];
  amount_unit?: Maybe<Scalars['String']['output']>;
  brand?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamp']['output']>;
  /** An object relationship */
  drink: Drinks;
  drink_id: Scalars['bigint']['output'];
  garnish: Scalars['Boolean']['output'];
  id: Scalars['bigint']['output'];
  /** An object relationship */
  ingredient: Ingredients;
  ingredient_id: Scalars['bigint']['output'];
  required: Scalars['Boolean']['output'];
  updated_at?: Maybe<Scalars['timestamp']['output']>;
};

/** aggregated selection of "drink_ingredients" */
export type DrinkIngredientsAggregate = {
  __typename?: 'drink_ingredients_aggregate';
  aggregate?: Maybe<DrinkIngredientsAggregateFields>;
  nodes: Array<DrinkIngredients>;
};

export type DrinkIngredientsAggregateBoolExp = {
  bool_and?: InputMaybe<DrinkIngredientsAggregateBoolExpBoolAnd>;
  bool_or?: InputMaybe<DrinkIngredientsAggregateBoolExpBoolOr>;
  count?: InputMaybe<DrinkIngredientsAggregateBoolExpCount>;
};

export type DrinkIngredientsAggregateBoolExpBoolAnd = {
  arguments: DrinkIngredientsSelectColumnDrinkIngredientsAggregateBoolExpBoolAndArgumentsColumns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<DrinkIngredientsBoolExp>;
  predicate: BooleanComparisonExp;
};

export type DrinkIngredientsAggregateBoolExpBoolOr = {
  arguments: DrinkIngredientsSelectColumnDrinkIngredientsAggregateBoolExpBoolOrArgumentsColumns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<DrinkIngredientsBoolExp>;
  predicate: BooleanComparisonExp;
};

export type DrinkIngredientsAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<DrinkIngredientsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<DrinkIngredientsBoolExp>;
  predicate: IntComparisonExp;
};

/** aggregate fields of "drink_ingredients" */
export type DrinkIngredientsAggregateFields = {
  __typename?: 'drink_ingredients_aggregate_fields';
  avg?: Maybe<DrinkIngredientsAvgFields>;
  count: Scalars['Int']['output'];
  max?: Maybe<DrinkIngredientsMaxFields>;
  min?: Maybe<DrinkIngredientsMinFields>;
  stddev?: Maybe<DrinkIngredientsStddevFields>;
  stddev_pop?: Maybe<DrinkIngredientsStddevPopFields>;
  stddev_samp?: Maybe<DrinkIngredientsStddevSampFields>;
  sum?: Maybe<DrinkIngredientsSumFields>;
  var_pop?: Maybe<DrinkIngredientsVarPopFields>;
  var_samp?: Maybe<DrinkIngredientsVarSampFields>;
  variance?: Maybe<DrinkIngredientsVarianceFields>;
};


/** aggregate fields of "drink_ingredients" */
export type DrinkIngredientsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<DrinkIngredientsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "drink_ingredients" */
export type DrinkIngredientsAggregateOrderBy = {
  avg?: InputMaybe<DrinkIngredientsAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<DrinkIngredientsMaxOrderBy>;
  min?: InputMaybe<DrinkIngredientsMinOrderBy>;
  stddev?: InputMaybe<DrinkIngredientsStddevOrderBy>;
  stddev_pop?: InputMaybe<DrinkIngredientsStddevPopOrderBy>;
  stddev_samp?: InputMaybe<DrinkIngredientsStddevSampOrderBy>;
  sum?: InputMaybe<DrinkIngredientsSumOrderBy>;
  var_pop?: InputMaybe<DrinkIngredientsVarPopOrderBy>;
  var_samp?: InputMaybe<DrinkIngredientsVarSampOrderBy>;
  variance?: InputMaybe<DrinkIngredientsVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "drink_ingredients" */
export type DrinkIngredientsArrRelInsertInput = {
  data: Array<DrinkIngredientsInsertInput>;
  /** upsert condition */
  on_conflict?: InputMaybe<DrinkIngredientsOnConflict>;
};

/** aggregate avg on columns */
export type DrinkIngredientsAvgFields = {
  __typename?: 'drink_ingredients_avg_fields';
  drink_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  ingredient_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "drink_ingredients" */
export type DrinkIngredientsAvgOrderBy = {
  drink_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  ingredient_id?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "drink_ingredients". All fields are combined with a logical 'AND'. */
export type DrinkIngredientsBoolExp = {
  _and?: InputMaybe<Array<DrinkIngredientsBoolExp>>;
  _not?: InputMaybe<DrinkIngredientsBoolExp>;
  _or?: InputMaybe<Array<DrinkIngredientsBoolExp>>;
  amount?: InputMaybe<StringComparisonExp>;
  amount_unit?: InputMaybe<StringComparisonExp>;
  brand?: InputMaybe<StringComparisonExp>;
  created_at?: InputMaybe<TimestampComparisonExp>;
  drink?: InputMaybe<DrinksBoolExp>;
  drink_id?: InputMaybe<BigintComparisonExp>;
  garnish?: InputMaybe<BooleanComparisonExp>;
  id?: InputMaybe<BigintComparisonExp>;
  ingredient?: InputMaybe<IngredientsBoolExp>;
  ingredient_id?: InputMaybe<BigintComparisonExp>;
  required?: InputMaybe<BooleanComparisonExp>;
  updated_at?: InputMaybe<TimestampComparisonExp>;
};

/** unique or primary key constraints on table "drink_ingredients" */
export enum DrinkIngredientsConstraint {
  /** unique or primary key constraint on columns "id" */
  DrinkIngredientsPkey = 'drink_ingredients_pkey'
}

/** input type for incrementing numeric columns in table "drink_ingredients" */
export type DrinkIngredientsIncInput = {
  drink_id?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  ingredient_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "drink_ingredients" */
export type DrinkIngredientsInsertInput = {
  amount?: InputMaybe<Scalars['String']['input']>;
  amount_unit?: InputMaybe<Scalars['String']['input']>;
  brand?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  drink?: InputMaybe<DrinksObjRelInsertInput>;
  drink_id?: InputMaybe<Scalars['bigint']['input']>;
  garnish?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  ingredient?: InputMaybe<IngredientsObjRelInsertInput>;
  ingredient_id?: InputMaybe<Scalars['bigint']['input']>;
  required?: InputMaybe<Scalars['Boolean']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
};

/** aggregate max on columns */
export type DrinkIngredientsMaxFields = {
  __typename?: 'drink_ingredients_max_fields';
  amount?: Maybe<Scalars['String']['output']>;
  amount_unit?: Maybe<Scalars['String']['output']>;
  brand?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamp']['output']>;
  drink_id?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  ingredient_id?: Maybe<Scalars['bigint']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
};

/** order by max() on columns of table "drink_ingredients" */
export type DrinkIngredientsMaxOrderBy = {
  amount?: InputMaybe<OrderBy>;
  amount_unit?: InputMaybe<OrderBy>;
  brand?: InputMaybe<OrderBy>;
  created_at?: InputMaybe<OrderBy>;
  drink_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  ingredient_id?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type DrinkIngredientsMinFields = {
  __typename?: 'drink_ingredients_min_fields';
  amount?: Maybe<Scalars['String']['output']>;
  amount_unit?: Maybe<Scalars['String']['output']>;
  brand?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamp']['output']>;
  drink_id?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  ingredient_id?: Maybe<Scalars['bigint']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
};

/** order by min() on columns of table "drink_ingredients" */
export type DrinkIngredientsMinOrderBy = {
  amount?: InputMaybe<OrderBy>;
  amount_unit?: InputMaybe<OrderBy>;
  brand?: InputMaybe<OrderBy>;
  created_at?: InputMaybe<OrderBy>;
  drink_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  ingredient_id?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "drink_ingredients" */
export type DrinkIngredientsMutationResponse = {
  __typename?: 'drink_ingredients_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<DrinkIngredients>;
};

/** on_conflict condition type for table "drink_ingredients" */
export type DrinkIngredientsOnConflict = {
  constraint: DrinkIngredientsConstraint;
  update_columns?: Array<DrinkIngredientsUpdateColumn>;
  where?: InputMaybe<DrinkIngredientsBoolExp>;
};

/** Ordering options when selecting data from "drink_ingredients". */
export type DrinkIngredientsOrderBy = {
  amount?: InputMaybe<OrderBy>;
  amount_unit?: InputMaybe<OrderBy>;
  brand?: InputMaybe<OrderBy>;
  created_at?: InputMaybe<OrderBy>;
  drink?: InputMaybe<DrinksOrderBy>;
  drink_id?: InputMaybe<OrderBy>;
  garnish?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  ingredient?: InputMaybe<IngredientsOrderBy>;
  ingredient_id?: InputMaybe<OrderBy>;
  required?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: drink_ingredients */
export type DrinkIngredientsPkColumnsInput = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "drink_ingredients" */
export enum DrinkIngredientsSelectColumn {
  /** column name */
  Amount = 'amount',
  /** column name */
  AmountUnit = 'amount_unit',
  /** column name */
  Brand = 'brand',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DrinkId = 'drink_id',
  /** column name */
  Garnish = 'garnish',
  /** column name */
  Id = 'id',
  /** column name */
  IngredientId = 'ingredient_id',
  /** column name */
  Required = 'required',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** select "drink_ingredients_aggregate_bool_exp_bool_and_arguments_columns" columns of table "drink_ingredients" */
export enum DrinkIngredientsSelectColumnDrinkIngredientsAggregateBoolExpBoolAndArgumentsColumns {
  /** column name */
  Garnish = 'garnish',
  /** column name */
  Required = 'required'
}

/** select "drink_ingredients_aggregate_bool_exp_bool_or_arguments_columns" columns of table "drink_ingredients" */
export enum DrinkIngredientsSelectColumnDrinkIngredientsAggregateBoolExpBoolOrArgumentsColumns {
  /** column name */
  Garnish = 'garnish',
  /** column name */
  Required = 'required'
}

/** input type for updating data in table "drink_ingredients" */
export type DrinkIngredientsSetInput = {
  amount?: InputMaybe<Scalars['String']['input']>;
  amount_unit?: InputMaybe<Scalars['String']['input']>;
  brand?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  drink_id?: InputMaybe<Scalars['bigint']['input']>;
  garnish?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  ingredient_id?: InputMaybe<Scalars['bigint']['input']>;
  required?: InputMaybe<Scalars['Boolean']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
};

/** aggregate stddev on columns */
export type DrinkIngredientsStddevFields = {
  __typename?: 'drink_ingredients_stddev_fields';
  drink_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  ingredient_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "drink_ingredients" */
export type DrinkIngredientsStddevOrderBy = {
  drink_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  ingredient_id?: InputMaybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type DrinkIngredientsStddevPopFields = {
  __typename?: 'drink_ingredients_stddev_pop_fields';
  drink_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  ingredient_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "drink_ingredients" */
export type DrinkIngredientsStddevPopOrderBy = {
  drink_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  ingredient_id?: InputMaybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type DrinkIngredientsStddevSampFields = {
  __typename?: 'drink_ingredients_stddev_samp_fields';
  drink_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  ingredient_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "drink_ingredients" */
export type DrinkIngredientsStddevSampOrderBy = {
  drink_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  ingredient_id?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "drink_ingredients" */
export type DrinkIngredientsStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: DrinkIngredientsStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type DrinkIngredientsStreamCursorValueInput = {
  amount?: InputMaybe<Scalars['String']['input']>;
  amount_unit?: InputMaybe<Scalars['String']['input']>;
  brand?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  drink_id?: InputMaybe<Scalars['bigint']['input']>;
  garnish?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  ingredient_id?: InputMaybe<Scalars['bigint']['input']>;
  required?: InputMaybe<Scalars['Boolean']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
};

/** aggregate sum on columns */
export type DrinkIngredientsSumFields = {
  __typename?: 'drink_ingredients_sum_fields';
  drink_id?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  ingredient_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "drink_ingredients" */
export type DrinkIngredientsSumOrderBy = {
  drink_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  ingredient_id?: InputMaybe<OrderBy>;
};

/** update columns of table "drink_ingredients" */
export enum DrinkIngredientsUpdateColumn {
  /** column name */
  Amount = 'amount',
  /** column name */
  AmountUnit = 'amount_unit',
  /** column name */
  Brand = 'brand',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DrinkId = 'drink_id',
  /** column name */
  Garnish = 'garnish',
  /** column name */
  Id = 'id',
  /** column name */
  IngredientId = 'ingredient_id',
  /** column name */
  Required = 'required',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type DrinkIngredientsUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<DrinkIngredientsIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<DrinkIngredientsSetInput>;
  /** filter the rows which have to be updated */
  where: DrinkIngredientsBoolExp;
};

/** aggregate var_pop on columns */
export type DrinkIngredientsVarPopFields = {
  __typename?: 'drink_ingredients_var_pop_fields';
  drink_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  ingredient_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "drink_ingredients" */
export type DrinkIngredientsVarPopOrderBy = {
  drink_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  ingredient_id?: InputMaybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type DrinkIngredientsVarSampFields = {
  __typename?: 'drink_ingredients_var_samp_fields';
  drink_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  ingredient_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "drink_ingredients" */
export type DrinkIngredientsVarSampOrderBy = {
  drink_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  ingredient_id?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type DrinkIngredientsVarianceFields = {
  __typename?: 'drink_ingredients_variance_fields';
  drink_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  ingredient_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "drink_ingredients" */
export type DrinkIngredientsVarianceOrderBy = {
  drink_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  ingredient_id?: InputMaybe<OrderBy>;
};

/** columns and relationships of "drinks" */
export type Drinks = {
  __typename?: 'drinks';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  deleted_at?: Maybe<Scalars['timestamp']['output']>;
  directions?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  drink_ingredients: Array<DrinkIngredients>;
  /** An aggregate relationship */
  drink_ingredients_aggregate: DrinkIngredientsAggregate;
  id: Scalars['bigint']['output'];
  name: Scalars['String']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  published: Scalars['Boolean']['output'];
  save_count: Scalars['Int']['output'];
  serves: Scalars['smallint']['output'];
  updated_at?: Maybe<Scalars['timestamp']['output']>;
  /** An object relationship */
  user: Users;
  /** An array relationship */
  user_drinks: Array<UserDrinks>;
  /** An aggregate relationship */
  user_drinks_aggregate: UserDrinksAggregate;
  user_id: Scalars['bigint']['output'];
};


/** columns and relationships of "drinks" */
export type DrinksDrinkIngredientsArgs = {
  distinct_on?: InputMaybe<Array<DrinkIngredientsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<DrinkIngredientsOrderBy>>;
  where?: InputMaybe<DrinkIngredientsBoolExp>;
};


/** columns and relationships of "drinks" */
export type DrinksDrinkIngredientsAggregateArgs = {
  distinct_on?: InputMaybe<Array<DrinkIngredientsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<DrinkIngredientsOrderBy>>;
  where?: InputMaybe<DrinkIngredientsBoolExp>;
};


/** columns and relationships of "drinks" */
export type DrinksUserDrinksArgs = {
  distinct_on?: InputMaybe<Array<UserDrinksSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<UserDrinksOrderBy>>;
  where?: InputMaybe<UserDrinksBoolExp>;
};


/** columns and relationships of "drinks" */
export type DrinksUserDrinksAggregateArgs = {
  distinct_on?: InputMaybe<Array<UserDrinksSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<UserDrinksOrderBy>>;
  where?: InputMaybe<UserDrinksBoolExp>;
};

/** aggregated selection of "drinks" */
export type DrinksAggregate = {
  __typename?: 'drinks_aggregate';
  aggregate?: Maybe<DrinksAggregateFields>;
  nodes: Array<Drinks>;
};

export type DrinksAggregateBoolExp = {
  bool_and?: InputMaybe<DrinksAggregateBoolExpBoolAnd>;
  bool_or?: InputMaybe<DrinksAggregateBoolExpBoolOr>;
  count?: InputMaybe<DrinksAggregateBoolExpCount>;
};

export type DrinksAggregateBoolExpBoolAnd = {
  arguments: DrinksSelectColumnDrinksAggregateBoolExpBoolAndArgumentsColumns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<DrinksBoolExp>;
  predicate: BooleanComparisonExp;
};

export type DrinksAggregateBoolExpBoolOr = {
  arguments: DrinksSelectColumnDrinksAggregateBoolExpBoolOrArgumentsColumns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<DrinksBoolExp>;
  predicate: BooleanComparisonExp;
};

export type DrinksAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<DrinksSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<DrinksBoolExp>;
  predicate: IntComparisonExp;
};

/** aggregate fields of "drinks" */
export type DrinksAggregateFields = {
  __typename?: 'drinks_aggregate_fields';
  avg?: Maybe<DrinksAvgFields>;
  count: Scalars['Int']['output'];
  max?: Maybe<DrinksMaxFields>;
  min?: Maybe<DrinksMinFields>;
  stddev?: Maybe<DrinksStddevFields>;
  stddev_pop?: Maybe<DrinksStddevPopFields>;
  stddev_samp?: Maybe<DrinksStddevSampFields>;
  sum?: Maybe<DrinksSumFields>;
  var_pop?: Maybe<DrinksVarPopFields>;
  var_samp?: Maybe<DrinksVarSampFields>;
  variance?: Maybe<DrinksVarianceFields>;
};


/** aggregate fields of "drinks" */
export type DrinksAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<DrinksSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "drinks" */
export type DrinksAggregateOrderBy = {
  avg?: InputMaybe<DrinksAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<DrinksMaxOrderBy>;
  min?: InputMaybe<DrinksMinOrderBy>;
  stddev?: InputMaybe<DrinksStddevOrderBy>;
  stddev_pop?: InputMaybe<DrinksStddevPopOrderBy>;
  stddev_samp?: InputMaybe<DrinksStddevSampOrderBy>;
  sum?: InputMaybe<DrinksSumOrderBy>;
  var_pop?: InputMaybe<DrinksVarPopOrderBy>;
  var_samp?: InputMaybe<DrinksVarSampOrderBy>;
  variance?: InputMaybe<DrinksVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "drinks" */
export type DrinksArrRelInsertInput = {
  data: Array<DrinksInsertInput>;
  /** upsert condition */
  on_conflict?: InputMaybe<DrinksOnConflict>;
};

/** aggregate avg on columns */
export type DrinksAvgFields = {
  __typename?: 'drinks_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  save_count?: Maybe<Scalars['Float']['output']>;
  serves?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "drinks" */
export type DrinksAvgOrderBy = {
  id?: InputMaybe<OrderBy>;
  save_count?: InputMaybe<OrderBy>;
  serves?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "drinks". All fields are combined with a logical 'AND'. */
export type DrinksBoolExp = {
  _and?: InputMaybe<Array<DrinksBoolExp>>;
  _not?: InputMaybe<DrinksBoolExp>;
  _or?: InputMaybe<Array<DrinksBoolExp>>;
  created_at?: InputMaybe<TimestampComparisonExp>;
  deleted_at?: InputMaybe<TimestampComparisonExp>;
  directions?: InputMaybe<StringComparisonExp>;
  drink_ingredients?: InputMaybe<DrinkIngredientsBoolExp>;
  drink_ingredients_aggregate?: InputMaybe<DrinkIngredientsAggregateBoolExp>;
  id?: InputMaybe<BigintComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  notes?: InputMaybe<StringComparisonExp>;
  published?: InputMaybe<BooleanComparisonExp>;
  save_count?: InputMaybe<IntComparisonExp>;
  serves?: InputMaybe<SmallintComparisonExp>;
  updated_at?: InputMaybe<TimestampComparisonExp>;
  user?: InputMaybe<UsersBoolExp>;
  user_drinks?: InputMaybe<UserDrinksBoolExp>;
  user_drinks_aggregate?: InputMaybe<UserDrinksAggregateBoolExp>;
  user_id?: InputMaybe<BigintComparisonExp>;
};

/** unique or primary key constraints on table "drinks" */
export enum DrinksConstraint {
  /** unique or primary key constraint on columns "name" */
  DrinksNameKey = 'drinks_name_key',
  /** unique or primary key constraint on columns "id" */
  DrinksPkey = 'drinks_pkey'
}

/** input type for incrementing numeric columns in table "drinks" */
export type DrinksIncInput = {
  id?: InputMaybe<Scalars['bigint']['input']>;
  save_count?: InputMaybe<Scalars['Int']['input']>;
  serves?: InputMaybe<Scalars['smallint']['input']>;
  user_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "drinks" */
export type DrinksInsertInput = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamp']['input']>;
  directions?: InputMaybe<Scalars['String']['input']>;
  drink_ingredients?: InputMaybe<DrinkIngredientsArrRelInsertInput>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  published?: InputMaybe<Scalars['Boolean']['input']>;
  save_count?: InputMaybe<Scalars['Int']['input']>;
  serves?: InputMaybe<Scalars['smallint']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
  user?: InputMaybe<UsersObjRelInsertInput>;
  user_drinks?: InputMaybe<UserDrinksArrRelInsertInput>;
  user_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate max on columns */
export type DrinksMaxFields = {
  __typename?: 'drinks_max_fields';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  deleted_at?: Maybe<Scalars['timestamp']['output']>;
  directions?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  notes?: Maybe<Scalars['String']['output']>;
  save_count?: Maybe<Scalars['Int']['output']>;
  serves?: Maybe<Scalars['smallint']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
  user_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by max() on columns of table "drinks" */
export type DrinksMaxOrderBy = {
  created_at?: InputMaybe<OrderBy>;
  deleted_at?: InputMaybe<OrderBy>;
  directions?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  notes?: InputMaybe<OrderBy>;
  save_count?: InputMaybe<OrderBy>;
  serves?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type DrinksMinFields = {
  __typename?: 'drinks_min_fields';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  deleted_at?: Maybe<Scalars['timestamp']['output']>;
  directions?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  notes?: Maybe<Scalars['String']['output']>;
  save_count?: Maybe<Scalars['Int']['output']>;
  serves?: Maybe<Scalars['smallint']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
  user_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by min() on columns of table "drinks" */
export type DrinksMinOrderBy = {
  created_at?: InputMaybe<OrderBy>;
  deleted_at?: InputMaybe<OrderBy>;
  directions?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  notes?: InputMaybe<OrderBy>;
  save_count?: InputMaybe<OrderBy>;
  serves?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "drinks" */
export type DrinksMutationResponse = {
  __typename?: 'drinks_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Drinks>;
};

/** input type for inserting object relation for remote table "drinks" */
export type DrinksObjRelInsertInput = {
  data: DrinksInsertInput;
  /** upsert condition */
  on_conflict?: InputMaybe<DrinksOnConflict>;
};

/** on_conflict condition type for table "drinks" */
export type DrinksOnConflict = {
  constraint: DrinksConstraint;
  update_columns?: Array<DrinksUpdateColumn>;
  where?: InputMaybe<DrinksBoolExp>;
};

/** Ordering options when selecting data from "drinks". */
export type DrinksOrderBy = {
  created_at?: InputMaybe<OrderBy>;
  deleted_at?: InputMaybe<OrderBy>;
  directions?: InputMaybe<OrderBy>;
  drink_ingredients_aggregate?: InputMaybe<DrinkIngredientsAggregateOrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  notes?: InputMaybe<OrderBy>;
  published?: InputMaybe<OrderBy>;
  save_count?: InputMaybe<OrderBy>;
  serves?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
  user?: InputMaybe<UsersOrderBy>;
  user_drinks_aggregate?: InputMaybe<UserDrinksAggregateOrderBy>;
  user_id?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: drinks */
export type DrinksPkColumnsInput = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "drinks" */
export enum DrinksSelectColumn {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Directions = 'directions',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Notes = 'notes',
  /** column name */
  Published = 'published',
  /** column name */
  SaveCount = 'save_count',
  /** column name */
  Serves = 'serves',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** select "drinks_aggregate_bool_exp_bool_and_arguments_columns" columns of table "drinks" */
export enum DrinksSelectColumnDrinksAggregateBoolExpBoolAndArgumentsColumns {
  /** column name */
  Published = 'published'
}

/** select "drinks_aggregate_bool_exp_bool_or_arguments_columns" columns of table "drinks" */
export enum DrinksSelectColumnDrinksAggregateBoolExpBoolOrArgumentsColumns {
  /** column name */
  Published = 'published'
}

/** input type for updating data in table "drinks" */
export type DrinksSetInput = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamp']['input']>;
  directions?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  published?: InputMaybe<Scalars['Boolean']['input']>;
  save_count?: InputMaybe<Scalars['Int']['input']>;
  serves?: InputMaybe<Scalars['smallint']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
  user_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate stddev on columns */
export type DrinksStddevFields = {
  __typename?: 'drinks_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  save_count?: Maybe<Scalars['Float']['output']>;
  serves?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "drinks" */
export type DrinksStddevOrderBy = {
  id?: InputMaybe<OrderBy>;
  save_count?: InputMaybe<OrderBy>;
  serves?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type DrinksStddevPopFields = {
  __typename?: 'drinks_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  save_count?: Maybe<Scalars['Float']['output']>;
  serves?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "drinks" */
export type DrinksStddevPopOrderBy = {
  id?: InputMaybe<OrderBy>;
  save_count?: InputMaybe<OrderBy>;
  serves?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type DrinksStddevSampFields = {
  __typename?: 'drinks_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  save_count?: Maybe<Scalars['Float']['output']>;
  serves?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "drinks" */
export type DrinksStddevSampOrderBy = {
  id?: InputMaybe<OrderBy>;
  save_count?: InputMaybe<OrderBy>;
  serves?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "drinks" */
export type DrinksStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: DrinksStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type DrinksStreamCursorValueInput = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamp']['input']>;
  directions?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  published?: InputMaybe<Scalars['Boolean']['input']>;
  save_count?: InputMaybe<Scalars['Int']['input']>;
  serves?: InputMaybe<Scalars['smallint']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
  user_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type DrinksSumFields = {
  __typename?: 'drinks_sum_fields';
  id?: Maybe<Scalars['bigint']['output']>;
  save_count?: Maybe<Scalars['Int']['output']>;
  serves?: Maybe<Scalars['smallint']['output']>;
  user_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "drinks" */
export type DrinksSumOrderBy = {
  id?: InputMaybe<OrderBy>;
  save_count?: InputMaybe<OrderBy>;
  serves?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
};

/** update columns of table "drinks" */
export enum DrinksUpdateColumn {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Directions = 'directions',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Notes = 'notes',
  /** column name */
  Published = 'published',
  /** column name */
  SaveCount = 'save_count',
  /** column name */
  Serves = 'serves',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

export type DrinksUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<DrinksIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<DrinksSetInput>;
  /** filter the rows which have to be updated */
  where: DrinksBoolExp;
};

/** aggregate var_pop on columns */
export type DrinksVarPopFields = {
  __typename?: 'drinks_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  save_count?: Maybe<Scalars['Float']['output']>;
  serves?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "drinks" */
export type DrinksVarPopOrderBy = {
  id?: InputMaybe<OrderBy>;
  save_count?: InputMaybe<OrderBy>;
  serves?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type DrinksVarSampFields = {
  __typename?: 'drinks_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  save_count?: Maybe<Scalars['Float']['output']>;
  serves?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "drinks" */
export type DrinksVarSampOrderBy = {
  id?: InputMaybe<OrderBy>;
  save_count?: InputMaybe<OrderBy>;
  serves?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type DrinksVarianceFields = {
  __typename?: 'drinks_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  save_count?: Maybe<Scalars['Float']['output']>;
  serves?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "drinks" */
export type DrinksVarianceOrderBy = {
  id?: InputMaybe<OrderBy>;
  save_count?: InputMaybe<OrderBy>;
  serves?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
};

/** columns and relationships of "ingredients" */
export type Ingredients = {
  __typename?: 'ingredients';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  /** An array relationship */
  drink_ingredients: Array<DrinkIngredients>;
  /** An aggregate relationship */
  drink_ingredients_aggregate: DrinkIngredientsAggregate;
  id: Scalars['bigint']['output'];
  name: Scalars['String']['output'];
  updated_at?: Maybe<Scalars['timestamp']['output']>;
  /** An array relationship */
  user_ingredients: Array<UserIngredients>;
  /** An aggregate relationship */
  user_ingredients_aggregate: UserIngredientsAggregate;
};


/** columns and relationships of "ingredients" */
export type IngredientsDrinkIngredientsArgs = {
  distinct_on?: InputMaybe<Array<DrinkIngredientsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<DrinkIngredientsOrderBy>>;
  where?: InputMaybe<DrinkIngredientsBoolExp>;
};


/** columns and relationships of "ingredients" */
export type IngredientsDrinkIngredientsAggregateArgs = {
  distinct_on?: InputMaybe<Array<DrinkIngredientsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<DrinkIngredientsOrderBy>>;
  where?: InputMaybe<DrinkIngredientsBoolExp>;
};


/** columns and relationships of "ingredients" */
export type IngredientsUserIngredientsArgs = {
  distinct_on?: InputMaybe<Array<UserIngredientsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<UserIngredientsOrderBy>>;
  where?: InputMaybe<UserIngredientsBoolExp>;
};


/** columns and relationships of "ingredients" */
export type IngredientsUserIngredientsAggregateArgs = {
  distinct_on?: InputMaybe<Array<UserIngredientsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<UserIngredientsOrderBy>>;
  where?: InputMaybe<UserIngredientsBoolExp>;
};

/** aggregated selection of "ingredients" */
export type IngredientsAggregate = {
  __typename?: 'ingredients_aggregate';
  aggregate?: Maybe<IngredientsAggregateFields>;
  nodes: Array<Ingredients>;
};

/** aggregate fields of "ingredients" */
export type IngredientsAggregateFields = {
  __typename?: 'ingredients_aggregate_fields';
  avg?: Maybe<IngredientsAvgFields>;
  count: Scalars['Int']['output'];
  max?: Maybe<IngredientsMaxFields>;
  min?: Maybe<IngredientsMinFields>;
  stddev?: Maybe<IngredientsStddevFields>;
  stddev_pop?: Maybe<IngredientsStddevPopFields>;
  stddev_samp?: Maybe<IngredientsStddevSampFields>;
  sum?: Maybe<IngredientsSumFields>;
  var_pop?: Maybe<IngredientsVarPopFields>;
  var_samp?: Maybe<IngredientsVarSampFields>;
  variance?: Maybe<IngredientsVarianceFields>;
};


/** aggregate fields of "ingredients" */
export type IngredientsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<IngredientsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type IngredientsAvgFields = {
  __typename?: 'ingredients_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "ingredients". All fields are combined with a logical 'AND'. */
export type IngredientsBoolExp = {
  _and?: InputMaybe<Array<IngredientsBoolExp>>;
  _not?: InputMaybe<IngredientsBoolExp>;
  _or?: InputMaybe<Array<IngredientsBoolExp>>;
  created_at?: InputMaybe<TimestampComparisonExp>;
  drink_ingredients?: InputMaybe<DrinkIngredientsBoolExp>;
  drink_ingredients_aggregate?: InputMaybe<DrinkIngredientsAggregateBoolExp>;
  id?: InputMaybe<BigintComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  updated_at?: InputMaybe<TimestampComparisonExp>;
  user_ingredients?: InputMaybe<UserIngredientsBoolExp>;
  user_ingredients_aggregate?: InputMaybe<UserIngredientsAggregateBoolExp>;
};

/** unique or primary key constraints on table "ingredients" */
export enum IngredientsConstraint {
  /** unique or primary key constraint on columns "name" */
  IngredientsNameKey = 'ingredients_name_key',
  /** unique or primary key constraint on columns "id" */
  IngredientsPkey = 'ingredients_pkey'
}

/** input type for incrementing numeric columns in table "ingredients" */
export type IngredientsIncInput = {
  id?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "ingredients" */
export type IngredientsInsertInput = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  drink_ingredients?: InputMaybe<DrinkIngredientsArrRelInsertInput>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
  user_ingredients?: InputMaybe<UserIngredientsArrRelInsertInput>;
};

/** aggregate max on columns */
export type IngredientsMaxFields = {
  __typename?: 'ingredients_max_fields';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
};

/** aggregate min on columns */
export type IngredientsMinFields = {
  __typename?: 'ingredients_min_fields';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
};

/** response of any mutation on the table "ingredients" */
export type IngredientsMutationResponse = {
  __typename?: 'ingredients_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Ingredients>;
};

/** input type for inserting object relation for remote table "ingredients" */
export type IngredientsObjRelInsertInput = {
  data: IngredientsInsertInput;
  /** upsert condition */
  on_conflict?: InputMaybe<IngredientsOnConflict>;
};

/** on_conflict condition type for table "ingredients" */
export type IngredientsOnConflict = {
  constraint: IngredientsConstraint;
  update_columns?: Array<IngredientsUpdateColumn>;
  where?: InputMaybe<IngredientsBoolExp>;
};

/** Ordering options when selecting data from "ingredients". */
export type IngredientsOrderBy = {
  created_at?: InputMaybe<OrderBy>;
  drink_ingredients_aggregate?: InputMaybe<DrinkIngredientsAggregateOrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
  user_ingredients_aggregate?: InputMaybe<UserIngredientsAggregateOrderBy>;
};

/** primary key columns input for table: ingredients */
export type IngredientsPkColumnsInput = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "ingredients" */
export enum IngredientsSelectColumn {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "ingredients" */
export type IngredientsSetInput = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
};

/** aggregate stddev on columns */
export type IngredientsStddevFields = {
  __typename?: 'ingredients_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type IngredientsStddevPopFields = {
  __typename?: 'ingredients_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type IngredientsStddevSampFields = {
  __typename?: 'ingredients_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "ingredients" */
export type IngredientsStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: IngredientsStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type IngredientsStreamCursorValueInput = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
};

/** aggregate sum on columns */
export type IngredientsSumFields = {
  __typename?: 'ingredients_sum_fields';
  id?: Maybe<Scalars['bigint']['output']>;
};

/** update columns of table "ingredients" */
export enum IngredientsUpdateColumn {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type IngredientsUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<IngredientsIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<IngredientsSetInput>;
  /** filter the rows which have to be updated */
  where: IngredientsBoolExp;
};

/** aggregate var_pop on columns */
export type IngredientsVarPopFields = {
  __typename?: 'ingredients_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type IngredientsVarSampFields = {
  __typename?: 'ingredients_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type IngredientsVarianceFields = {
  __typename?: 'ingredients_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** mutation root */
export type MutationRoot = {
  __typename?: 'mutation_root';
  /** delete data from the table: "drink_ingredients" */
  delete_drink_ingredients?: Maybe<DrinkIngredientsMutationResponse>;
  /** delete single row from the table: "drink_ingredients" */
  delete_drink_ingredients_by_pk?: Maybe<DrinkIngredients>;
  /** delete data from the table: "drinks" */
  delete_drinks?: Maybe<DrinksMutationResponse>;
  /** delete single row from the table: "drinks" */
  delete_drinks_by_pk?: Maybe<Drinks>;
  /** delete data from the table: "ingredients" */
  delete_ingredients?: Maybe<IngredientsMutationResponse>;
  /** delete single row from the table: "ingredients" */
  delete_ingredients_by_pk?: Maybe<Ingredients>;
  /** delete data from the table: "user_drinks" */
  delete_user_drinks?: Maybe<UserDrinksMutationResponse>;
  /** delete single row from the table: "user_drinks" */
  delete_user_drinks_by_pk?: Maybe<UserDrinks>;
  /** delete data from the table: "user_ingredients" */
  delete_user_ingredients?: Maybe<UserIngredientsMutationResponse>;
  /** delete single row from the table: "user_ingredients" */
  delete_user_ingredients_by_pk?: Maybe<UserIngredients>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<UsersMutationResponse>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "drink_ingredients" */
  insert_drink_ingredients?: Maybe<DrinkIngredientsMutationResponse>;
  /** insert a single row into the table: "drink_ingredients" */
  insert_drink_ingredients_one?: Maybe<DrinkIngredients>;
  /** insert data into the table: "drinks" */
  insert_drinks?: Maybe<DrinksMutationResponse>;
  /** insert a single row into the table: "drinks" */
  insert_drinks_one?: Maybe<Drinks>;
  /** insert data into the table: "ingredients" */
  insert_ingredients?: Maybe<IngredientsMutationResponse>;
  /** insert a single row into the table: "ingredients" */
  insert_ingredients_one?: Maybe<Ingredients>;
  /** insert data into the table: "user_drinks" */
  insert_user_drinks?: Maybe<UserDrinksMutationResponse>;
  /** insert a single row into the table: "user_drinks" */
  insert_user_drinks_one?: Maybe<UserDrinks>;
  /** insert data into the table: "user_ingredients" */
  insert_user_ingredients?: Maybe<UserIngredientsMutationResponse>;
  /** insert a single row into the table: "user_ingredients" */
  insert_user_ingredients_one?: Maybe<UserIngredients>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<UsersMutationResponse>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "drink_ingredients" */
  update_drink_ingredients?: Maybe<DrinkIngredientsMutationResponse>;
  /** update single row of the table: "drink_ingredients" */
  update_drink_ingredients_by_pk?: Maybe<DrinkIngredients>;
  /** update multiples rows of table: "drink_ingredients" */
  update_drink_ingredients_many?: Maybe<Array<Maybe<DrinkIngredientsMutationResponse>>>;
  /** update data of the table: "drinks" */
  update_drinks?: Maybe<DrinksMutationResponse>;
  /** update single row of the table: "drinks" */
  update_drinks_by_pk?: Maybe<Drinks>;
  /** update multiples rows of table: "drinks" */
  update_drinks_many?: Maybe<Array<Maybe<DrinksMutationResponse>>>;
  /** update data of the table: "ingredients" */
  update_ingredients?: Maybe<IngredientsMutationResponse>;
  /** update single row of the table: "ingredients" */
  update_ingredients_by_pk?: Maybe<Ingredients>;
  /** update multiples rows of table: "ingredients" */
  update_ingredients_many?: Maybe<Array<Maybe<IngredientsMutationResponse>>>;
  /** update data of the table: "user_drinks" */
  update_user_drinks?: Maybe<UserDrinksMutationResponse>;
  /** update single row of the table: "user_drinks" */
  update_user_drinks_by_pk?: Maybe<UserDrinks>;
  /** update multiples rows of table: "user_drinks" */
  update_user_drinks_many?: Maybe<Array<Maybe<UserDrinksMutationResponse>>>;
  /** update data of the table: "user_ingredients" */
  update_user_ingredients?: Maybe<UserIngredientsMutationResponse>;
  /** update single row of the table: "user_ingredients" */
  update_user_ingredients_by_pk?: Maybe<UserIngredients>;
  /** update multiples rows of table: "user_ingredients" */
  update_user_ingredients_many?: Maybe<Array<Maybe<UserIngredientsMutationResponse>>>;
  /** update data of the table: "users" */
  update_users?: Maybe<UsersMutationResponse>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
  /** update multiples rows of table: "users" */
  update_users_many?: Maybe<Array<Maybe<UsersMutationResponse>>>;
};


/** mutation root */
export type MutationRootDeleteDrinkIngredientsArgs = {
  where: DrinkIngredientsBoolExp;
};


/** mutation root */
export type MutationRootDeleteDrinkIngredientsByPkArgs = {
  id: Scalars['bigint']['input'];
};


/** mutation root */
export type MutationRootDeleteDrinksArgs = {
  where: DrinksBoolExp;
};


/** mutation root */
export type MutationRootDeleteDrinksByPkArgs = {
  id: Scalars['bigint']['input'];
};


/** mutation root */
export type MutationRootDeleteIngredientsArgs = {
  where: IngredientsBoolExp;
};


/** mutation root */
export type MutationRootDeleteIngredientsByPkArgs = {
  id: Scalars['bigint']['input'];
};


/** mutation root */
export type MutationRootDeleteUserDrinksArgs = {
  where: UserDrinksBoolExp;
};


/** mutation root */
export type MutationRootDeleteUserDrinksByPkArgs = {
  id: Scalars['bigint']['input'];
};


/** mutation root */
export type MutationRootDeleteUserIngredientsArgs = {
  where: UserIngredientsBoolExp;
};


/** mutation root */
export type MutationRootDeleteUserIngredientsByPkArgs = {
  id: Scalars['bigint']['input'];
};


/** mutation root */
export type MutationRootDeleteUsersArgs = {
  where: UsersBoolExp;
};


/** mutation root */
export type MutationRootDeleteUsersByPkArgs = {
  id: Scalars['bigint']['input'];
};


/** mutation root */
export type MutationRootInsertDrinkIngredientsArgs = {
  objects: Array<DrinkIngredientsInsertInput>;
  on_conflict?: InputMaybe<DrinkIngredientsOnConflict>;
};


/** mutation root */
export type MutationRootInsertDrinkIngredientsOneArgs = {
  object: DrinkIngredientsInsertInput;
  on_conflict?: InputMaybe<DrinkIngredientsOnConflict>;
};


/** mutation root */
export type MutationRootInsertDrinksArgs = {
  objects: Array<DrinksInsertInput>;
  on_conflict?: InputMaybe<DrinksOnConflict>;
};


/** mutation root */
export type MutationRootInsertDrinksOneArgs = {
  object: DrinksInsertInput;
  on_conflict?: InputMaybe<DrinksOnConflict>;
};


/** mutation root */
export type MutationRootInsertIngredientsArgs = {
  objects: Array<IngredientsInsertInput>;
  on_conflict?: InputMaybe<IngredientsOnConflict>;
};


/** mutation root */
export type MutationRootInsertIngredientsOneArgs = {
  object: IngredientsInsertInput;
  on_conflict?: InputMaybe<IngredientsOnConflict>;
};


/** mutation root */
export type MutationRootInsertUserDrinksArgs = {
  objects: Array<UserDrinksInsertInput>;
  on_conflict?: InputMaybe<UserDrinksOnConflict>;
};


/** mutation root */
export type MutationRootInsertUserDrinksOneArgs = {
  object: UserDrinksInsertInput;
  on_conflict?: InputMaybe<UserDrinksOnConflict>;
};


/** mutation root */
export type MutationRootInsertUserIngredientsArgs = {
  objects: Array<UserIngredientsInsertInput>;
  on_conflict?: InputMaybe<UserIngredientsOnConflict>;
};


/** mutation root */
export type MutationRootInsertUserIngredientsOneArgs = {
  object: UserIngredientsInsertInput;
  on_conflict?: InputMaybe<UserIngredientsOnConflict>;
};


/** mutation root */
export type MutationRootInsertUsersArgs = {
  objects: Array<UsersInsertInput>;
  on_conflict?: InputMaybe<UsersOnConflict>;
};


/** mutation root */
export type MutationRootInsertUsersOneArgs = {
  object: UsersInsertInput;
  on_conflict?: InputMaybe<UsersOnConflict>;
};


/** mutation root */
export type MutationRootUpdateDrinkIngredientsArgs = {
  _inc?: InputMaybe<DrinkIngredientsIncInput>;
  _set?: InputMaybe<DrinkIngredientsSetInput>;
  where: DrinkIngredientsBoolExp;
};


/** mutation root */
export type MutationRootUpdateDrinkIngredientsByPkArgs = {
  _inc?: InputMaybe<DrinkIngredientsIncInput>;
  _set?: InputMaybe<DrinkIngredientsSetInput>;
  pk_columns: DrinkIngredientsPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateDrinkIngredientsManyArgs = {
  updates: Array<DrinkIngredientsUpdates>;
};


/** mutation root */
export type MutationRootUpdateDrinksArgs = {
  _inc?: InputMaybe<DrinksIncInput>;
  _set?: InputMaybe<DrinksSetInput>;
  where: DrinksBoolExp;
};


/** mutation root */
export type MutationRootUpdateDrinksByPkArgs = {
  _inc?: InputMaybe<DrinksIncInput>;
  _set?: InputMaybe<DrinksSetInput>;
  pk_columns: DrinksPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateDrinksManyArgs = {
  updates: Array<DrinksUpdates>;
};


/** mutation root */
export type MutationRootUpdateIngredientsArgs = {
  _inc?: InputMaybe<IngredientsIncInput>;
  _set?: InputMaybe<IngredientsSetInput>;
  where: IngredientsBoolExp;
};


/** mutation root */
export type MutationRootUpdateIngredientsByPkArgs = {
  _inc?: InputMaybe<IngredientsIncInput>;
  _set?: InputMaybe<IngredientsSetInput>;
  pk_columns: IngredientsPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateIngredientsManyArgs = {
  updates: Array<IngredientsUpdates>;
};


/** mutation root */
export type MutationRootUpdateUserDrinksArgs = {
  _inc?: InputMaybe<UserDrinksIncInput>;
  _set?: InputMaybe<UserDrinksSetInput>;
  where: UserDrinksBoolExp;
};


/** mutation root */
export type MutationRootUpdateUserDrinksByPkArgs = {
  _inc?: InputMaybe<UserDrinksIncInput>;
  _set?: InputMaybe<UserDrinksSetInput>;
  pk_columns: UserDrinksPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateUserDrinksManyArgs = {
  updates: Array<UserDrinksUpdates>;
};


/** mutation root */
export type MutationRootUpdateUserIngredientsArgs = {
  _inc?: InputMaybe<UserIngredientsIncInput>;
  _set?: InputMaybe<UserIngredientsSetInput>;
  where: UserIngredientsBoolExp;
};


/** mutation root */
export type MutationRootUpdateUserIngredientsByPkArgs = {
  _inc?: InputMaybe<UserIngredientsIncInput>;
  _set?: InputMaybe<UserIngredientsSetInput>;
  pk_columns: UserIngredientsPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateUserIngredientsManyArgs = {
  updates: Array<UserIngredientsUpdates>;
};


/** mutation root */
export type MutationRootUpdateUsersArgs = {
  _inc?: InputMaybe<UsersIncInput>;
  _set?: InputMaybe<UsersSetInput>;
  where: UsersBoolExp;
};


/** mutation root */
export type MutationRootUpdateUsersByPkArgs = {
  _inc?: InputMaybe<UsersIncInput>;
  _set?: InputMaybe<UsersSetInput>;
  pk_columns: UsersPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateUsersManyArgs = {
  updates: Array<UsersUpdates>;
};

/** column ordering options */
export enum OrderBy {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type QueryRoot = {
  __typename?: 'query_root';
  /** An array relationship */
  drink_ingredients: Array<DrinkIngredients>;
  /** An aggregate relationship */
  drink_ingredients_aggregate: DrinkIngredientsAggregate;
  /** fetch data from the table: "drink_ingredients" using primary key columns */
  drink_ingredients_by_pk?: Maybe<DrinkIngredients>;
  /** An array relationship */
  drinks: Array<Drinks>;
  /** An aggregate relationship */
  drinks_aggregate: DrinksAggregate;
  /** fetch data from the table: "drinks" using primary key columns */
  drinks_by_pk?: Maybe<Drinks>;
  /** fetch data from the table: "ingredients" */
  ingredients: Array<Ingredients>;
  /** fetch aggregated fields from the table: "ingredients" */
  ingredients_aggregate: IngredientsAggregate;
  /** fetch data from the table: "ingredients" using primary key columns */
  ingredients_by_pk?: Maybe<Ingredients>;
  /** fetch data from the table: "users" using primary key columns */
  user?: Maybe<Users>;
  /** An array relationship */
  user_drinks: Array<UserDrinks>;
  /** An aggregate relationship */
  user_drinks_aggregate: UserDrinksAggregate;
  /** fetch data from the table: "user_drinks" using primary key columns */
  user_drinks_by_pk?: Maybe<UserDrinks>;
  /** An array relationship */
  user_ingredients: Array<UserIngredients>;
  /** An aggregate relationship */
  user_ingredients_aggregate: UserIngredientsAggregate;
  /** fetch data from the table: "user_ingredients" using primary key columns */
  user_ingredients_by_pk?: Maybe<UserIngredients>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: UsersAggregate;
};


export type QueryRootDrinkIngredientsArgs = {
  distinct_on?: InputMaybe<Array<DrinkIngredientsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<DrinkIngredientsOrderBy>>;
  where?: InputMaybe<DrinkIngredientsBoolExp>;
};


export type QueryRootDrinkIngredientsAggregateArgs = {
  distinct_on?: InputMaybe<Array<DrinkIngredientsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<DrinkIngredientsOrderBy>>;
  where?: InputMaybe<DrinkIngredientsBoolExp>;
};


export type QueryRootDrinkIngredientsByPkArgs = {
  id: Scalars['bigint']['input'];
};


export type QueryRootDrinksArgs = {
  distinct_on?: InputMaybe<Array<DrinksSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<DrinksOrderBy>>;
  where?: InputMaybe<DrinksBoolExp>;
};


export type QueryRootDrinksAggregateArgs = {
  distinct_on?: InputMaybe<Array<DrinksSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<DrinksOrderBy>>;
  where?: InputMaybe<DrinksBoolExp>;
};


export type QueryRootDrinksByPkArgs = {
  id: Scalars['bigint']['input'];
};


export type QueryRootIngredientsArgs = {
  distinct_on?: InputMaybe<Array<IngredientsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<IngredientsOrderBy>>;
  where?: InputMaybe<IngredientsBoolExp>;
};


export type QueryRootIngredientsAggregateArgs = {
  distinct_on?: InputMaybe<Array<IngredientsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<IngredientsOrderBy>>;
  where?: InputMaybe<IngredientsBoolExp>;
};


export type QueryRootIngredientsByPkArgs = {
  id: Scalars['bigint']['input'];
};


export type QueryRootUserArgs = {
  id: Scalars['bigint']['input'];
};


export type QueryRootUserDrinksArgs = {
  distinct_on?: InputMaybe<Array<UserDrinksSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<UserDrinksOrderBy>>;
  where?: InputMaybe<UserDrinksBoolExp>;
};


export type QueryRootUserDrinksAggregateArgs = {
  distinct_on?: InputMaybe<Array<UserDrinksSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<UserDrinksOrderBy>>;
  where?: InputMaybe<UserDrinksBoolExp>;
};


export type QueryRootUserDrinksByPkArgs = {
  id: Scalars['bigint']['input'];
};


export type QueryRootUserIngredientsArgs = {
  distinct_on?: InputMaybe<Array<UserIngredientsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<UserIngredientsOrderBy>>;
  where?: InputMaybe<UserIngredientsBoolExp>;
};


export type QueryRootUserIngredientsAggregateArgs = {
  distinct_on?: InputMaybe<Array<UserIngredientsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<UserIngredientsOrderBy>>;
  where?: InputMaybe<UserIngredientsBoolExp>;
};


export type QueryRootUserIngredientsByPkArgs = {
  id: Scalars['bigint']['input'];
};


export type QueryRootUsersArgs = {
  distinct_on?: InputMaybe<Array<UsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<UsersOrderBy>>;
  where?: InputMaybe<UsersBoolExp>;
};


export type QueryRootUsersAggregateArgs = {
  distinct_on?: InputMaybe<Array<UsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<UsersOrderBy>>;
  where?: InputMaybe<UsersBoolExp>;
};

/** Boolean expression to compare columns of type "smallint". All fields are combined with logical 'AND'. */
export type SmallintComparisonExp = {
  _eq?: InputMaybe<Scalars['smallint']['input']>;
  _gt?: InputMaybe<Scalars['smallint']['input']>;
  _gte?: InputMaybe<Scalars['smallint']['input']>;
  _in?: InputMaybe<Array<Scalars['smallint']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['smallint']['input']>;
  _lte?: InputMaybe<Scalars['smallint']['input']>;
  _neq?: InputMaybe<Scalars['smallint']['input']>;
  _nin?: InputMaybe<Array<Scalars['smallint']['input']>>;
};

export type SubscriptionRoot = {
  __typename?: 'subscription_root';
  /** An array relationship */
  drink_ingredients: Array<DrinkIngredients>;
  /** An aggregate relationship */
  drink_ingredients_aggregate: DrinkIngredientsAggregate;
  /** fetch data from the table: "drink_ingredients" using primary key columns */
  drink_ingredients_by_pk?: Maybe<DrinkIngredients>;
  /** fetch data from the table in a streaming manner: "drink_ingredients" */
  drink_ingredients_stream: Array<DrinkIngredients>;
  /** An array relationship */
  drinks: Array<Drinks>;
  /** An aggregate relationship */
  drinks_aggregate: DrinksAggregate;
  /** fetch data from the table: "drinks" using primary key columns */
  drinks_by_pk?: Maybe<Drinks>;
  /** fetch data from the table in a streaming manner: "drinks" */
  drinks_stream: Array<Drinks>;
  /** fetch data from the table: "ingredients" */
  ingredients: Array<Ingredients>;
  /** fetch aggregated fields from the table: "ingredients" */
  ingredients_aggregate: IngredientsAggregate;
  /** fetch data from the table: "ingredients" using primary key columns */
  ingredients_by_pk?: Maybe<Ingredients>;
  /** fetch data from the table in a streaming manner: "ingredients" */
  ingredients_stream: Array<Ingredients>;
  /** fetch data from the table: "users" using primary key columns */
  user?: Maybe<Users>;
  /** An array relationship */
  user_drinks: Array<UserDrinks>;
  /** An aggregate relationship */
  user_drinks_aggregate: UserDrinksAggregate;
  /** fetch data from the table: "user_drinks" using primary key columns */
  user_drinks_by_pk?: Maybe<UserDrinks>;
  /** fetch data from the table in a streaming manner: "user_drinks" */
  user_drinks_stream: Array<UserDrinks>;
  /** An array relationship */
  user_ingredients: Array<UserIngredients>;
  /** An aggregate relationship */
  user_ingredients_aggregate: UserIngredientsAggregate;
  /** fetch data from the table: "user_ingredients" using primary key columns */
  user_ingredients_by_pk?: Maybe<UserIngredients>;
  /** fetch data from the table in a streaming manner: "user_ingredients" */
  user_ingredients_stream: Array<UserIngredients>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: UsersAggregate;
  /** fetch data from the table in a streaming manner: "users" */
  users_stream: Array<Users>;
};


export type SubscriptionRootDrinkIngredientsArgs = {
  distinct_on?: InputMaybe<Array<DrinkIngredientsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<DrinkIngredientsOrderBy>>;
  where?: InputMaybe<DrinkIngredientsBoolExp>;
};


export type SubscriptionRootDrinkIngredientsAggregateArgs = {
  distinct_on?: InputMaybe<Array<DrinkIngredientsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<DrinkIngredientsOrderBy>>;
  where?: InputMaybe<DrinkIngredientsBoolExp>;
};


export type SubscriptionRootDrinkIngredientsByPkArgs = {
  id: Scalars['bigint']['input'];
};


export type SubscriptionRootDrinkIngredientsStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<DrinkIngredientsStreamCursorInput>>;
  where?: InputMaybe<DrinkIngredientsBoolExp>;
};


export type SubscriptionRootDrinksArgs = {
  distinct_on?: InputMaybe<Array<DrinksSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<DrinksOrderBy>>;
  where?: InputMaybe<DrinksBoolExp>;
};


export type SubscriptionRootDrinksAggregateArgs = {
  distinct_on?: InputMaybe<Array<DrinksSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<DrinksOrderBy>>;
  where?: InputMaybe<DrinksBoolExp>;
};


export type SubscriptionRootDrinksByPkArgs = {
  id: Scalars['bigint']['input'];
};


export type SubscriptionRootDrinksStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<DrinksStreamCursorInput>>;
  where?: InputMaybe<DrinksBoolExp>;
};


export type SubscriptionRootIngredientsArgs = {
  distinct_on?: InputMaybe<Array<IngredientsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<IngredientsOrderBy>>;
  where?: InputMaybe<IngredientsBoolExp>;
};


export type SubscriptionRootIngredientsAggregateArgs = {
  distinct_on?: InputMaybe<Array<IngredientsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<IngredientsOrderBy>>;
  where?: InputMaybe<IngredientsBoolExp>;
};


export type SubscriptionRootIngredientsByPkArgs = {
  id: Scalars['bigint']['input'];
};


export type SubscriptionRootIngredientsStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<IngredientsStreamCursorInput>>;
  where?: InputMaybe<IngredientsBoolExp>;
};


export type SubscriptionRootUserArgs = {
  id: Scalars['bigint']['input'];
};


export type SubscriptionRootUserDrinksArgs = {
  distinct_on?: InputMaybe<Array<UserDrinksSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<UserDrinksOrderBy>>;
  where?: InputMaybe<UserDrinksBoolExp>;
};


export type SubscriptionRootUserDrinksAggregateArgs = {
  distinct_on?: InputMaybe<Array<UserDrinksSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<UserDrinksOrderBy>>;
  where?: InputMaybe<UserDrinksBoolExp>;
};


export type SubscriptionRootUserDrinksByPkArgs = {
  id: Scalars['bigint']['input'];
};


export type SubscriptionRootUserDrinksStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<UserDrinksStreamCursorInput>>;
  where?: InputMaybe<UserDrinksBoolExp>;
};


export type SubscriptionRootUserIngredientsArgs = {
  distinct_on?: InputMaybe<Array<UserIngredientsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<UserIngredientsOrderBy>>;
  where?: InputMaybe<UserIngredientsBoolExp>;
};


export type SubscriptionRootUserIngredientsAggregateArgs = {
  distinct_on?: InputMaybe<Array<UserIngredientsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<UserIngredientsOrderBy>>;
  where?: InputMaybe<UserIngredientsBoolExp>;
};


export type SubscriptionRootUserIngredientsByPkArgs = {
  id: Scalars['bigint']['input'];
};


export type SubscriptionRootUserIngredientsStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<UserIngredientsStreamCursorInput>>;
  where?: InputMaybe<UserIngredientsBoolExp>;
};


export type SubscriptionRootUsersArgs = {
  distinct_on?: InputMaybe<Array<UsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<UsersOrderBy>>;
  where?: InputMaybe<UsersBoolExp>;
};


export type SubscriptionRootUsersAggregateArgs = {
  distinct_on?: InputMaybe<Array<UsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<UsersOrderBy>>;
  where?: InputMaybe<UsersBoolExp>;
};


export type SubscriptionRootUsersStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<UsersStreamCursorInput>>;
  where?: InputMaybe<UsersBoolExp>;
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type TimestampComparisonExp = {
  _eq?: InputMaybe<Scalars['timestamp']['input']>;
  _gt?: InputMaybe<Scalars['timestamp']['input']>;
  _gte?: InputMaybe<Scalars['timestamp']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamp']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamp']['input']>;
  _lte?: InputMaybe<Scalars['timestamp']['input']>;
  _neq?: InputMaybe<Scalars['timestamp']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamp']['input']>>;
};

/** columns and relationships of "user_drinks" */
export type UserDrinks = {
  __typename?: 'user_drinks';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  /** An object relationship */
  drink: Drinks;
  drink_id: Scalars['bigint']['output'];
  id: Scalars['bigint']['output'];
  updated_at?: Maybe<Scalars['timestamp']['output']>;
  /** An object relationship */
  user: Users;
  user_id: Scalars['bigint']['output'];
};

/** aggregated selection of "user_drinks" */
export type UserDrinksAggregate = {
  __typename?: 'user_drinks_aggregate';
  aggregate?: Maybe<UserDrinksAggregateFields>;
  nodes: Array<UserDrinks>;
};

export type UserDrinksAggregateBoolExp = {
  count?: InputMaybe<UserDrinksAggregateBoolExpCount>;
};

export type UserDrinksAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<UserDrinksSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<UserDrinksBoolExp>;
  predicate: IntComparisonExp;
};

/** aggregate fields of "user_drinks" */
export type UserDrinksAggregateFields = {
  __typename?: 'user_drinks_aggregate_fields';
  avg?: Maybe<UserDrinksAvgFields>;
  count: Scalars['Int']['output'];
  max?: Maybe<UserDrinksMaxFields>;
  min?: Maybe<UserDrinksMinFields>;
  stddev?: Maybe<UserDrinksStddevFields>;
  stddev_pop?: Maybe<UserDrinksStddevPopFields>;
  stddev_samp?: Maybe<UserDrinksStddevSampFields>;
  sum?: Maybe<UserDrinksSumFields>;
  var_pop?: Maybe<UserDrinksVarPopFields>;
  var_samp?: Maybe<UserDrinksVarSampFields>;
  variance?: Maybe<UserDrinksVarianceFields>;
};


/** aggregate fields of "user_drinks" */
export type UserDrinksAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<UserDrinksSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "user_drinks" */
export type UserDrinksAggregateOrderBy = {
  avg?: InputMaybe<UserDrinksAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<UserDrinksMaxOrderBy>;
  min?: InputMaybe<UserDrinksMinOrderBy>;
  stddev?: InputMaybe<UserDrinksStddevOrderBy>;
  stddev_pop?: InputMaybe<UserDrinksStddevPopOrderBy>;
  stddev_samp?: InputMaybe<UserDrinksStddevSampOrderBy>;
  sum?: InputMaybe<UserDrinksSumOrderBy>;
  var_pop?: InputMaybe<UserDrinksVarPopOrderBy>;
  var_samp?: InputMaybe<UserDrinksVarSampOrderBy>;
  variance?: InputMaybe<UserDrinksVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "user_drinks" */
export type UserDrinksArrRelInsertInput = {
  data: Array<UserDrinksInsertInput>;
  /** upsert condition */
  on_conflict?: InputMaybe<UserDrinksOnConflict>;
};

/** aggregate avg on columns */
export type UserDrinksAvgFields = {
  __typename?: 'user_drinks_avg_fields';
  drink_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "user_drinks" */
export type UserDrinksAvgOrderBy = {
  drink_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "user_drinks". All fields are combined with a logical 'AND'. */
export type UserDrinksBoolExp = {
  _and?: InputMaybe<Array<UserDrinksBoolExp>>;
  _not?: InputMaybe<UserDrinksBoolExp>;
  _or?: InputMaybe<Array<UserDrinksBoolExp>>;
  created_at?: InputMaybe<TimestampComparisonExp>;
  drink?: InputMaybe<DrinksBoolExp>;
  drink_id?: InputMaybe<BigintComparisonExp>;
  id?: InputMaybe<BigintComparisonExp>;
  updated_at?: InputMaybe<TimestampComparisonExp>;
  user?: InputMaybe<UsersBoolExp>;
  user_id?: InputMaybe<BigintComparisonExp>;
};

/** unique or primary key constraints on table "user_drinks" */
export enum UserDrinksConstraint {
  /** unique or primary key constraint on columns "id" */
  UserDrinksPkey = 'user_drinks_pkey'
}

/** input type for incrementing numeric columns in table "user_drinks" */
export type UserDrinksIncInput = {
  drink_id?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  user_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "user_drinks" */
export type UserDrinksInsertInput = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  drink?: InputMaybe<DrinksObjRelInsertInput>;
  drink_id?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
  user?: InputMaybe<UsersObjRelInsertInput>;
  user_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate max on columns */
export type UserDrinksMaxFields = {
  __typename?: 'user_drinks_max_fields';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  drink_id?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
  user_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by max() on columns of table "user_drinks" */
export type UserDrinksMaxOrderBy = {
  created_at?: InputMaybe<OrderBy>;
  drink_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type UserDrinksMinFields = {
  __typename?: 'user_drinks_min_fields';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  drink_id?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
  user_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by min() on columns of table "user_drinks" */
export type UserDrinksMinOrderBy = {
  created_at?: InputMaybe<OrderBy>;
  drink_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "user_drinks" */
export type UserDrinksMutationResponse = {
  __typename?: 'user_drinks_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<UserDrinks>;
};

/** on_conflict condition type for table "user_drinks" */
export type UserDrinksOnConflict = {
  constraint: UserDrinksConstraint;
  update_columns?: Array<UserDrinksUpdateColumn>;
  where?: InputMaybe<UserDrinksBoolExp>;
};

/** Ordering options when selecting data from "user_drinks". */
export type UserDrinksOrderBy = {
  created_at?: InputMaybe<OrderBy>;
  drink?: InputMaybe<DrinksOrderBy>;
  drink_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
  user?: InputMaybe<UsersOrderBy>;
  user_id?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: user_drinks */
export type UserDrinksPkColumnsInput = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "user_drinks" */
export enum UserDrinksSelectColumn {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DrinkId = 'drink_id',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "user_drinks" */
export type UserDrinksSetInput = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  drink_id?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
  user_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate stddev on columns */
export type UserDrinksStddevFields = {
  __typename?: 'user_drinks_stddev_fields';
  drink_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "user_drinks" */
export type UserDrinksStddevOrderBy = {
  drink_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type UserDrinksStddevPopFields = {
  __typename?: 'user_drinks_stddev_pop_fields';
  drink_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "user_drinks" */
export type UserDrinksStddevPopOrderBy = {
  drink_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type UserDrinksStddevSampFields = {
  __typename?: 'user_drinks_stddev_samp_fields';
  drink_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "user_drinks" */
export type UserDrinksStddevSampOrderBy = {
  drink_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "user_drinks" */
export type UserDrinksStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: UserDrinksStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type UserDrinksStreamCursorValueInput = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  drink_id?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
  user_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type UserDrinksSumFields = {
  __typename?: 'user_drinks_sum_fields';
  drink_id?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  user_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "user_drinks" */
export type UserDrinksSumOrderBy = {
  drink_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
};

/** update columns of table "user_drinks" */
export enum UserDrinksUpdateColumn {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DrinkId = 'drink_id',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

export type UserDrinksUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<UserDrinksIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<UserDrinksSetInput>;
  /** filter the rows which have to be updated */
  where: UserDrinksBoolExp;
};

/** aggregate var_pop on columns */
export type UserDrinksVarPopFields = {
  __typename?: 'user_drinks_var_pop_fields';
  drink_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "user_drinks" */
export type UserDrinksVarPopOrderBy = {
  drink_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type UserDrinksVarSampFields = {
  __typename?: 'user_drinks_var_samp_fields';
  drink_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "user_drinks" */
export type UserDrinksVarSampOrderBy = {
  drink_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type UserDrinksVarianceFields = {
  __typename?: 'user_drinks_variance_fields';
  drink_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "user_drinks" */
export type UserDrinksVarianceOrderBy = {
  drink_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
};

/** columns and relationships of "user_ingredients" */
export type UserIngredients = {
  __typename?: 'user_ingredients';
  brand?: Maybe<Scalars['String']['output']>;
  category?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id: Scalars['bigint']['output'];
  /** An object relationship */
  ingredient: Ingredients;
  ingredient_id: Scalars['bigint']['output'];
  sub_category?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
  /** An object relationship */
  user: Users;
  user_id: Scalars['bigint']['output'];
};

/** aggregated selection of "user_ingredients" */
export type UserIngredientsAggregate = {
  __typename?: 'user_ingredients_aggregate';
  aggregate?: Maybe<UserIngredientsAggregateFields>;
  nodes: Array<UserIngredients>;
};

export type UserIngredientsAggregateBoolExp = {
  count?: InputMaybe<UserIngredientsAggregateBoolExpCount>;
};

export type UserIngredientsAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<UserIngredientsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<UserIngredientsBoolExp>;
  predicate: IntComparisonExp;
};

/** aggregate fields of "user_ingredients" */
export type UserIngredientsAggregateFields = {
  __typename?: 'user_ingredients_aggregate_fields';
  avg?: Maybe<UserIngredientsAvgFields>;
  count: Scalars['Int']['output'];
  max?: Maybe<UserIngredientsMaxFields>;
  min?: Maybe<UserIngredientsMinFields>;
  stddev?: Maybe<UserIngredientsStddevFields>;
  stddev_pop?: Maybe<UserIngredientsStddevPopFields>;
  stddev_samp?: Maybe<UserIngredientsStddevSampFields>;
  sum?: Maybe<UserIngredientsSumFields>;
  var_pop?: Maybe<UserIngredientsVarPopFields>;
  var_samp?: Maybe<UserIngredientsVarSampFields>;
  variance?: Maybe<UserIngredientsVarianceFields>;
};


/** aggregate fields of "user_ingredients" */
export type UserIngredientsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<UserIngredientsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "user_ingredients" */
export type UserIngredientsAggregateOrderBy = {
  avg?: InputMaybe<UserIngredientsAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<UserIngredientsMaxOrderBy>;
  min?: InputMaybe<UserIngredientsMinOrderBy>;
  stddev?: InputMaybe<UserIngredientsStddevOrderBy>;
  stddev_pop?: InputMaybe<UserIngredientsStddevPopOrderBy>;
  stddev_samp?: InputMaybe<UserIngredientsStddevSampOrderBy>;
  sum?: InputMaybe<UserIngredientsSumOrderBy>;
  var_pop?: InputMaybe<UserIngredientsVarPopOrderBy>;
  var_samp?: InputMaybe<UserIngredientsVarSampOrderBy>;
  variance?: InputMaybe<UserIngredientsVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "user_ingredients" */
export type UserIngredientsArrRelInsertInput = {
  data: Array<UserIngredientsInsertInput>;
  /** upsert condition */
  on_conflict?: InputMaybe<UserIngredientsOnConflict>;
};

/** aggregate avg on columns */
export type UserIngredientsAvgFields = {
  __typename?: 'user_ingredients_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  ingredient_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "user_ingredients" */
export type UserIngredientsAvgOrderBy = {
  id?: InputMaybe<OrderBy>;
  ingredient_id?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "user_ingredients". All fields are combined with a logical 'AND'. */
export type UserIngredientsBoolExp = {
  _and?: InputMaybe<Array<UserIngredientsBoolExp>>;
  _not?: InputMaybe<UserIngredientsBoolExp>;
  _or?: InputMaybe<Array<UserIngredientsBoolExp>>;
  brand?: InputMaybe<StringComparisonExp>;
  category?: InputMaybe<StringComparisonExp>;
  created_at?: InputMaybe<TimestampComparisonExp>;
  id?: InputMaybe<BigintComparisonExp>;
  ingredient?: InputMaybe<IngredientsBoolExp>;
  ingredient_id?: InputMaybe<BigintComparisonExp>;
  sub_category?: InputMaybe<StringComparisonExp>;
  updated_at?: InputMaybe<TimestampComparisonExp>;
  user?: InputMaybe<UsersBoolExp>;
  user_id?: InputMaybe<BigintComparisonExp>;
};

/** unique or primary key constraints on table "user_ingredients" */
export enum UserIngredientsConstraint {
  /** unique or primary key constraint on columns "brand", "ingredient_id" */
  UniqueUserIngredientBrand = 'unique_user_ingredient_brand',
  /** unique or primary key constraint on columns "id" */
  UserIngredientsPkey = 'user_ingredients_pkey'
}

/** input type for incrementing numeric columns in table "user_ingredients" */
export type UserIngredientsIncInput = {
  id?: InputMaybe<Scalars['bigint']['input']>;
  ingredient_id?: InputMaybe<Scalars['bigint']['input']>;
  user_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "user_ingredients" */
export type UserIngredientsInsertInput = {
  brand?: InputMaybe<Scalars['String']['input']>;
  category?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  ingredient?: InputMaybe<IngredientsObjRelInsertInput>;
  ingredient_id?: InputMaybe<Scalars['bigint']['input']>;
  sub_category?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
  user?: InputMaybe<UsersObjRelInsertInput>;
  user_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate max on columns */
export type UserIngredientsMaxFields = {
  __typename?: 'user_ingredients_max_fields';
  brand?: Maybe<Scalars['String']['output']>;
  category?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  ingredient_id?: Maybe<Scalars['bigint']['output']>;
  sub_category?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
  user_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by max() on columns of table "user_ingredients" */
export type UserIngredientsMaxOrderBy = {
  brand?: InputMaybe<OrderBy>;
  category?: InputMaybe<OrderBy>;
  created_at?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  ingredient_id?: InputMaybe<OrderBy>;
  sub_category?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type UserIngredientsMinFields = {
  __typename?: 'user_ingredients_min_fields';
  brand?: Maybe<Scalars['String']['output']>;
  category?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  ingredient_id?: Maybe<Scalars['bigint']['output']>;
  sub_category?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
  user_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by min() on columns of table "user_ingredients" */
export type UserIngredientsMinOrderBy = {
  brand?: InputMaybe<OrderBy>;
  category?: InputMaybe<OrderBy>;
  created_at?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  ingredient_id?: InputMaybe<OrderBy>;
  sub_category?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "user_ingredients" */
export type UserIngredientsMutationResponse = {
  __typename?: 'user_ingredients_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<UserIngredients>;
};

/** on_conflict condition type for table "user_ingredients" */
export type UserIngredientsOnConflict = {
  constraint: UserIngredientsConstraint;
  update_columns?: Array<UserIngredientsUpdateColumn>;
  where?: InputMaybe<UserIngredientsBoolExp>;
};

/** Ordering options when selecting data from "user_ingredients". */
export type UserIngredientsOrderBy = {
  brand?: InputMaybe<OrderBy>;
  category?: InputMaybe<OrderBy>;
  created_at?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  ingredient?: InputMaybe<IngredientsOrderBy>;
  ingredient_id?: InputMaybe<OrderBy>;
  sub_category?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
  user?: InputMaybe<UsersOrderBy>;
  user_id?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: user_ingredients */
export type UserIngredientsPkColumnsInput = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "user_ingredients" */
export enum UserIngredientsSelectColumn {
  /** column name */
  Brand = 'brand',
  /** column name */
  Category = 'category',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  IngredientId = 'ingredient_id',
  /** column name */
  SubCategory = 'sub_category',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "user_ingredients" */
export type UserIngredientsSetInput = {
  brand?: InputMaybe<Scalars['String']['input']>;
  category?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  ingredient_id?: InputMaybe<Scalars['bigint']['input']>;
  sub_category?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
  user_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate stddev on columns */
export type UserIngredientsStddevFields = {
  __typename?: 'user_ingredients_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  ingredient_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "user_ingredients" */
export type UserIngredientsStddevOrderBy = {
  id?: InputMaybe<OrderBy>;
  ingredient_id?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type UserIngredientsStddevPopFields = {
  __typename?: 'user_ingredients_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  ingredient_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "user_ingredients" */
export type UserIngredientsStddevPopOrderBy = {
  id?: InputMaybe<OrderBy>;
  ingredient_id?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type UserIngredientsStddevSampFields = {
  __typename?: 'user_ingredients_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  ingredient_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "user_ingredients" */
export type UserIngredientsStddevSampOrderBy = {
  id?: InputMaybe<OrderBy>;
  ingredient_id?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "user_ingredients" */
export type UserIngredientsStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: UserIngredientsStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type UserIngredientsStreamCursorValueInput = {
  brand?: InputMaybe<Scalars['String']['input']>;
  category?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  ingredient_id?: InputMaybe<Scalars['bigint']['input']>;
  sub_category?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
  user_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type UserIngredientsSumFields = {
  __typename?: 'user_ingredients_sum_fields';
  id?: Maybe<Scalars['bigint']['output']>;
  ingredient_id?: Maybe<Scalars['bigint']['output']>;
  user_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "user_ingredients" */
export type UserIngredientsSumOrderBy = {
  id?: InputMaybe<OrderBy>;
  ingredient_id?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
};

/** update columns of table "user_ingredients" */
export enum UserIngredientsUpdateColumn {
  /** column name */
  Brand = 'brand',
  /** column name */
  Category = 'category',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  IngredientId = 'ingredient_id',
  /** column name */
  SubCategory = 'sub_category',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

export type UserIngredientsUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<UserIngredientsIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<UserIngredientsSetInput>;
  /** filter the rows which have to be updated */
  where: UserIngredientsBoolExp;
};

/** aggregate var_pop on columns */
export type UserIngredientsVarPopFields = {
  __typename?: 'user_ingredients_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  ingredient_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "user_ingredients" */
export type UserIngredientsVarPopOrderBy = {
  id?: InputMaybe<OrderBy>;
  ingredient_id?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type UserIngredientsVarSampFields = {
  __typename?: 'user_ingredients_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  ingredient_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "user_ingredients" */
export type UserIngredientsVarSampOrderBy = {
  id?: InputMaybe<OrderBy>;
  ingredient_id?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type UserIngredientsVarianceFields = {
  __typename?: 'user_ingredients_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  ingredient_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "user_ingredients" */
export type UserIngredientsVarianceOrderBy = {
  id?: InputMaybe<OrderBy>;
  ingredient_id?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  deleted_at?: Maybe<Scalars['timestamp']['output']>;
  /** An array relationship */
  drinks: Array<Drinks>;
  /** An aggregate relationship */
  drinks_aggregate: DrinksAggregate;
  email: Scalars['String']['output'];
  email_verified_at?: Maybe<Scalars['timestamp']['output']>;
  id: Scalars['bigint']['output'];
  name: Scalars['String']['output'];
  password: Scalars['String']['output'];
  remember_token?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
  /** An array relationship */
  user_drinks: Array<UserDrinks>;
  /** An aggregate relationship */
  user_drinks_aggregate: UserDrinksAggregate;
  /** An array relationship */
  user_ingredients: Array<UserIngredients>;
  /** An aggregate relationship */
  user_ingredients_aggregate: UserIngredientsAggregate;
};


/** columns and relationships of "users" */
export type UsersDrinksArgs = {
  distinct_on?: InputMaybe<Array<DrinksSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<DrinksOrderBy>>;
  where?: InputMaybe<DrinksBoolExp>;
};


/** columns and relationships of "users" */
export type UsersDrinksAggregateArgs = {
  distinct_on?: InputMaybe<Array<DrinksSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<DrinksOrderBy>>;
  where?: InputMaybe<DrinksBoolExp>;
};


/** columns and relationships of "users" */
export type UsersUserDrinksArgs = {
  distinct_on?: InputMaybe<Array<UserDrinksSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<UserDrinksOrderBy>>;
  where?: InputMaybe<UserDrinksBoolExp>;
};


/** columns and relationships of "users" */
export type UsersUserDrinksAggregateArgs = {
  distinct_on?: InputMaybe<Array<UserDrinksSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<UserDrinksOrderBy>>;
  where?: InputMaybe<UserDrinksBoolExp>;
};


/** columns and relationships of "users" */
export type UsersUserIngredientsArgs = {
  distinct_on?: InputMaybe<Array<UserIngredientsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<UserIngredientsOrderBy>>;
  where?: InputMaybe<UserIngredientsBoolExp>;
};


/** columns and relationships of "users" */
export type UsersUserIngredientsAggregateArgs = {
  distinct_on?: InputMaybe<Array<UserIngredientsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<UserIngredientsOrderBy>>;
  where?: InputMaybe<UserIngredientsBoolExp>;
};

/** aggregated selection of "users" */
export type UsersAggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<UsersAggregateFields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type UsersAggregateFields = {
  __typename?: 'users_aggregate_fields';
  avg?: Maybe<UsersAvgFields>;
  count: Scalars['Int']['output'];
  max?: Maybe<UsersMaxFields>;
  min?: Maybe<UsersMinFields>;
  stddev?: Maybe<UsersStddevFields>;
  stddev_pop?: Maybe<UsersStddevPopFields>;
  stddev_samp?: Maybe<UsersStddevSampFields>;
  sum?: Maybe<UsersSumFields>;
  var_pop?: Maybe<UsersVarPopFields>;
  var_samp?: Maybe<UsersVarSampFields>;
  variance?: Maybe<UsersVarianceFields>;
};


/** aggregate fields of "users" */
export type UsersAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<UsersSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type UsersAvgFields = {
  __typename?: 'users_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type UsersBoolExp = {
  _and?: InputMaybe<Array<UsersBoolExp>>;
  _not?: InputMaybe<UsersBoolExp>;
  _or?: InputMaybe<Array<UsersBoolExp>>;
  created_at?: InputMaybe<TimestampComparisonExp>;
  deleted_at?: InputMaybe<TimestampComparisonExp>;
  drinks?: InputMaybe<DrinksBoolExp>;
  drinks_aggregate?: InputMaybe<DrinksAggregateBoolExp>;
  email?: InputMaybe<StringComparisonExp>;
  email_verified_at?: InputMaybe<TimestampComparisonExp>;
  id?: InputMaybe<BigintComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  password?: InputMaybe<StringComparisonExp>;
  remember_token?: InputMaybe<StringComparisonExp>;
  updated_at?: InputMaybe<TimestampComparisonExp>;
  user_drinks?: InputMaybe<UserDrinksBoolExp>;
  user_drinks_aggregate?: InputMaybe<UserDrinksAggregateBoolExp>;
  user_ingredients?: InputMaybe<UserIngredientsBoolExp>;
  user_ingredients_aggregate?: InputMaybe<UserIngredientsAggregateBoolExp>;
};

/** unique or primary key constraints on table "users" */
export enum UsersConstraint {
  /** unique or primary key constraint on columns "email" */
  UsersEmailKey = 'users_email_key',
  /** unique or primary key constraint on columns "id" */
  UsersPkey = 'users_pkey'
}

/** input type for incrementing numeric columns in table "users" */
export type UsersIncInput = {
  id?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "users" */
export type UsersInsertInput = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamp']['input']>;
  drinks?: InputMaybe<DrinksArrRelInsertInput>;
  email?: InputMaybe<Scalars['String']['input']>;
  email_verified_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  remember_token?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
  user_drinks?: InputMaybe<UserDrinksArrRelInsertInput>;
  user_ingredients?: InputMaybe<UserIngredientsArrRelInsertInput>;
};

/** aggregate max on columns */
export type UsersMaxFields = {
  __typename?: 'users_max_fields';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  deleted_at?: Maybe<Scalars['timestamp']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  email_verified_at?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  remember_token?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
};

/** aggregate min on columns */
export type UsersMinFields = {
  __typename?: 'users_min_fields';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  deleted_at?: Maybe<Scalars['timestamp']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  email_verified_at?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  remember_token?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
};

/** response of any mutation on the table "users" */
export type UsersMutationResponse = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type UsersObjRelInsertInput = {
  data: UsersInsertInput;
  /** upsert condition */
  on_conflict?: InputMaybe<UsersOnConflict>;
};

/** on_conflict condition type for table "users" */
export type UsersOnConflict = {
  constraint: UsersConstraint;
  update_columns?: Array<UsersUpdateColumn>;
  where?: InputMaybe<UsersBoolExp>;
};

/** Ordering options when selecting data from "users". */
export type UsersOrderBy = {
  created_at?: InputMaybe<OrderBy>;
  deleted_at?: InputMaybe<OrderBy>;
  drinks_aggregate?: InputMaybe<DrinksAggregateOrderBy>;
  email?: InputMaybe<OrderBy>;
  email_verified_at?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  password?: InputMaybe<OrderBy>;
  remember_token?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
  user_drinks_aggregate?: InputMaybe<UserDrinksAggregateOrderBy>;
  user_ingredients_aggregate?: InputMaybe<UserIngredientsAggregateOrderBy>;
};

/** primary key columns input for table: users */
export type UsersPkColumnsInput = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "users" */
export enum UsersSelectColumn {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Email = 'email',
  /** column name */
  EmailVerifiedAt = 'email_verified_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Password = 'password',
  /** column name */
  RememberToken = 'remember_token',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "users" */
export type UsersSetInput = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamp']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  email_verified_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  remember_token?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
};

/** aggregate stddev on columns */
export type UsersStddevFields = {
  __typename?: 'users_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type UsersStddevPopFields = {
  __typename?: 'users_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type UsersStddevSampFields = {
  __typename?: 'users_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "users" */
export type UsersStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: UsersStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type UsersStreamCursorValueInput = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamp']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  email_verified_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  remember_token?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
};

/** aggregate sum on columns */
export type UsersSumFields = {
  __typename?: 'users_sum_fields';
  id?: Maybe<Scalars['bigint']['output']>;
};

/** update columns of table "users" */
export enum UsersUpdateColumn {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Email = 'email',
  /** column name */
  EmailVerifiedAt = 'email_verified_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Password = 'password',
  /** column name */
  RememberToken = 'remember_token',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type UsersUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<UsersIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<UsersSetInput>;
  /** filter the rows which have to be updated */
  where: UsersBoolExp;
};

/** aggregate var_pop on columns */
export type UsersVarPopFields = {
  __typename?: 'users_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type UsersVarSampFields = {
  __typename?: 'users_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type UsersVarianceFields = {
  __typename?: 'users_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

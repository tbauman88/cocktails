import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type drink_ingredientsKeySpecifier = ('amount' | 'amount_unit' | 'brand' | 'created_at' | 'drink' | 'drink_id' | 'garnish' | 'id' | 'ingredient' | 'ingredient_id' | 'required' | 'updated_at' | drink_ingredientsKeySpecifier)[];
export type drink_ingredientsFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	amount_unit?: FieldPolicy<any> | FieldReadFunction<any>,
	brand?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	drink?: FieldPolicy<any> | FieldReadFunction<any>,
	drink_id?: FieldPolicy<any> | FieldReadFunction<any>,
	garnish?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	ingredient?: FieldPolicy<any> | FieldReadFunction<any>,
	ingredient_id?: FieldPolicy<any> | FieldReadFunction<any>,
	required?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>
};
export type drink_ingredients_aggregateKeySpecifier = ('aggregate' | 'nodes' | drink_ingredients_aggregateKeySpecifier)[];
export type drink_ingredients_aggregateFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>
};
export type drink_ingredients_aggregate_fieldsKeySpecifier = ('avg' | 'count' | 'max' | 'min' | 'stddev' | 'stddev_pop' | 'stddev_samp' | 'sum' | 'var_pop' | 'var_samp' | 'variance' | drink_ingredients_aggregate_fieldsKeySpecifier)[];
export type drink_ingredients_aggregate_fieldsFieldPolicy = {
	avg?: FieldPolicy<any> | FieldReadFunction<any>,
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	max?: FieldPolicy<any> | FieldReadFunction<any>,
	min?: FieldPolicy<any> | FieldReadFunction<any>,
	stddev?: FieldPolicy<any> | FieldReadFunction<any>,
	stddev_pop?: FieldPolicy<any> | FieldReadFunction<any>,
	stddev_samp?: FieldPolicy<any> | FieldReadFunction<any>,
	sum?: FieldPolicy<any> | FieldReadFunction<any>,
	var_pop?: FieldPolicy<any> | FieldReadFunction<any>,
	var_samp?: FieldPolicy<any> | FieldReadFunction<any>,
	variance?: FieldPolicy<any> | FieldReadFunction<any>
};
export type drink_ingredients_avg_fieldsKeySpecifier = ('drink_id' | 'id' | 'ingredient_id' | drink_ingredients_avg_fieldsKeySpecifier)[];
export type drink_ingredients_avg_fieldsFieldPolicy = {
	drink_id?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	ingredient_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type drink_ingredients_max_fieldsKeySpecifier = ('amount' | 'amount_unit' | 'brand' | 'created_at' | 'drink_id' | 'id' | 'ingredient_id' | 'updated_at' | drink_ingredients_max_fieldsKeySpecifier)[];
export type drink_ingredients_max_fieldsFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	amount_unit?: FieldPolicy<any> | FieldReadFunction<any>,
	brand?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	drink_id?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	ingredient_id?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>
};
export type drink_ingredients_min_fieldsKeySpecifier = ('amount' | 'amount_unit' | 'brand' | 'created_at' | 'drink_id' | 'id' | 'ingredient_id' | 'updated_at' | drink_ingredients_min_fieldsKeySpecifier)[];
export type drink_ingredients_min_fieldsFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	amount_unit?: FieldPolicy<any> | FieldReadFunction<any>,
	brand?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	drink_id?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	ingredient_id?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>
};
export type drink_ingredients_mutation_responseKeySpecifier = ('affected_rows' | 'returning' | drink_ingredients_mutation_responseKeySpecifier)[];
export type drink_ingredients_mutation_responseFieldPolicy = {
	affected_rows?: FieldPolicy<any> | FieldReadFunction<any>,
	returning?: FieldPolicy<any> | FieldReadFunction<any>
};
export type drink_ingredients_stddev_fieldsKeySpecifier = ('drink_id' | 'id' | 'ingredient_id' | drink_ingredients_stddev_fieldsKeySpecifier)[];
export type drink_ingredients_stddev_fieldsFieldPolicy = {
	drink_id?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	ingredient_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type drink_ingredients_stddev_pop_fieldsKeySpecifier = ('drink_id' | 'id' | 'ingredient_id' | drink_ingredients_stddev_pop_fieldsKeySpecifier)[];
export type drink_ingredients_stddev_pop_fieldsFieldPolicy = {
	drink_id?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	ingredient_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type drink_ingredients_stddev_samp_fieldsKeySpecifier = ('drink_id' | 'id' | 'ingredient_id' | drink_ingredients_stddev_samp_fieldsKeySpecifier)[];
export type drink_ingredients_stddev_samp_fieldsFieldPolicy = {
	drink_id?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	ingredient_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type drink_ingredients_sum_fieldsKeySpecifier = ('drink_id' | 'id' | 'ingredient_id' | drink_ingredients_sum_fieldsKeySpecifier)[];
export type drink_ingredients_sum_fieldsFieldPolicy = {
	drink_id?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	ingredient_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type drink_ingredients_var_pop_fieldsKeySpecifier = ('drink_id' | 'id' | 'ingredient_id' | drink_ingredients_var_pop_fieldsKeySpecifier)[];
export type drink_ingredients_var_pop_fieldsFieldPolicy = {
	drink_id?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	ingredient_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type drink_ingredients_var_samp_fieldsKeySpecifier = ('drink_id' | 'id' | 'ingredient_id' | drink_ingredients_var_samp_fieldsKeySpecifier)[];
export type drink_ingredients_var_samp_fieldsFieldPolicy = {
	drink_id?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	ingredient_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type drink_ingredients_variance_fieldsKeySpecifier = ('drink_id' | 'id' | 'ingredient_id' | drink_ingredients_variance_fieldsKeySpecifier)[];
export type drink_ingredients_variance_fieldsFieldPolicy = {
	drink_id?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	ingredient_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type drinksKeySpecifier = ('created_at' | 'deleted_at' | 'directions' | 'drink_ingredients' | 'drink_ingredients_aggregate' | 'id' | 'name' | 'notes' | 'published' | 'save_count' | 'serves' | 'updated_at' | 'user' | 'user_drinks' | 'user_drinks_aggregate' | 'user_id' | drinksKeySpecifier)[];
export type drinksFieldPolicy = {
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	deleted_at?: FieldPolicy<any> | FieldReadFunction<any>,
	directions?: FieldPolicy<any> | FieldReadFunction<any>,
	drink_ingredients?: FieldPolicy<any> | FieldReadFunction<any>,
	drink_ingredients_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	notes?: FieldPolicy<any> | FieldReadFunction<any>,
	published?: FieldPolicy<any> | FieldReadFunction<any>,
	save_count?: FieldPolicy<any> | FieldReadFunction<any>,
	serves?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	user_drinks?: FieldPolicy<any> | FieldReadFunction<any>,
	user_drinks_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	user_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type drinks_aggregateKeySpecifier = ('aggregate' | 'nodes' | drinks_aggregateKeySpecifier)[];
export type drinks_aggregateFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>
};
export type drinks_aggregate_fieldsKeySpecifier = ('avg' | 'count' | 'max' | 'min' | 'stddev' | 'stddev_pop' | 'stddev_samp' | 'sum' | 'var_pop' | 'var_samp' | 'variance' | drinks_aggregate_fieldsKeySpecifier)[];
export type drinks_aggregate_fieldsFieldPolicy = {
	avg?: FieldPolicy<any> | FieldReadFunction<any>,
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	max?: FieldPolicy<any> | FieldReadFunction<any>,
	min?: FieldPolicy<any> | FieldReadFunction<any>,
	stddev?: FieldPolicy<any> | FieldReadFunction<any>,
	stddev_pop?: FieldPolicy<any> | FieldReadFunction<any>,
	stddev_samp?: FieldPolicy<any> | FieldReadFunction<any>,
	sum?: FieldPolicy<any> | FieldReadFunction<any>,
	var_pop?: FieldPolicy<any> | FieldReadFunction<any>,
	var_samp?: FieldPolicy<any> | FieldReadFunction<any>,
	variance?: FieldPolicy<any> | FieldReadFunction<any>
};
export type drinks_avg_fieldsKeySpecifier = ('id' | 'save_count' | 'serves' | 'user_id' | drinks_avg_fieldsKeySpecifier)[];
export type drinks_avg_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	save_count?: FieldPolicy<any> | FieldReadFunction<any>,
	serves?: FieldPolicy<any> | FieldReadFunction<any>,
	user_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type drinks_max_fieldsKeySpecifier = ('created_at' | 'deleted_at' | 'directions' | 'id' | 'name' | 'notes' | 'save_count' | 'serves' | 'updated_at' | 'user_id' | drinks_max_fieldsKeySpecifier)[];
export type drinks_max_fieldsFieldPolicy = {
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	deleted_at?: FieldPolicy<any> | FieldReadFunction<any>,
	directions?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	notes?: FieldPolicy<any> | FieldReadFunction<any>,
	save_count?: FieldPolicy<any> | FieldReadFunction<any>,
	serves?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>,
	user_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type drinks_min_fieldsKeySpecifier = ('created_at' | 'deleted_at' | 'directions' | 'id' | 'name' | 'notes' | 'save_count' | 'serves' | 'updated_at' | 'user_id' | drinks_min_fieldsKeySpecifier)[];
export type drinks_min_fieldsFieldPolicy = {
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	deleted_at?: FieldPolicy<any> | FieldReadFunction<any>,
	directions?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	notes?: FieldPolicy<any> | FieldReadFunction<any>,
	save_count?: FieldPolicy<any> | FieldReadFunction<any>,
	serves?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>,
	user_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type drinks_mutation_responseKeySpecifier = ('affected_rows' | 'returning' | drinks_mutation_responseKeySpecifier)[];
export type drinks_mutation_responseFieldPolicy = {
	affected_rows?: FieldPolicy<any> | FieldReadFunction<any>,
	returning?: FieldPolicy<any> | FieldReadFunction<any>
};
export type drinks_stddev_fieldsKeySpecifier = ('id' | 'save_count' | 'serves' | 'user_id' | drinks_stddev_fieldsKeySpecifier)[];
export type drinks_stddev_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	save_count?: FieldPolicy<any> | FieldReadFunction<any>,
	serves?: FieldPolicy<any> | FieldReadFunction<any>,
	user_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type drinks_stddev_pop_fieldsKeySpecifier = ('id' | 'save_count' | 'serves' | 'user_id' | drinks_stddev_pop_fieldsKeySpecifier)[];
export type drinks_stddev_pop_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	save_count?: FieldPolicy<any> | FieldReadFunction<any>,
	serves?: FieldPolicy<any> | FieldReadFunction<any>,
	user_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type drinks_stddev_samp_fieldsKeySpecifier = ('id' | 'save_count' | 'serves' | 'user_id' | drinks_stddev_samp_fieldsKeySpecifier)[];
export type drinks_stddev_samp_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	save_count?: FieldPolicy<any> | FieldReadFunction<any>,
	serves?: FieldPolicy<any> | FieldReadFunction<any>,
	user_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type drinks_sum_fieldsKeySpecifier = ('id' | 'save_count' | 'serves' | 'user_id' | drinks_sum_fieldsKeySpecifier)[];
export type drinks_sum_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	save_count?: FieldPolicy<any> | FieldReadFunction<any>,
	serves?: FieldPolicy<any> | FieldReadFunction<any>,
	user_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type drinks_var_pop_fieldsKeySpecifier = ('id' | 'save_count' | 'serves' | 'user_id' | drinks_var_pop_fieldsKeySpecifier)[];
export type drinks_var_pop_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	save_count?: FieldPolicy<any> | FieldReadFunction<any>,
	serves?: FieldPolicy<any> | FieldReadFunction<any>,
	user_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type drinks_var_samp_fieldsKeySpecifier = ('id' | 'save_count' | 'serves' | 'user_id' | drinks_var_samp_fieldsKeySpecifier)[];
export type drinks_var_samp_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	save_count?: FieldPolicy<any> | FieldReadFunction<any>,
	serves?: FieldPolicy<any> | FieldReadFunction<any>,
	user_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type drinks_variance_fieldsKeySpecifier = ('id' | 'save_count' | 'serves' | 'user_id' | drinks_variance_fieldsKeySpecifier)[];
export type drinks_variance_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	save_count?: FieldPolicy<any> | FieldReadFunction<any>,
	serves?: FieldPolicy<any> | FieldReadFunction<any>,
	user_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ingredientsKeySpecifier = ('created_at' | 'drink_ingredients' | 'drink_ingredients_aggregate' | 'id' | 'name' | 'updated_at' | 'user_ingredients' | 'user_ingredients_aggregate' | ingredientsKeySpecifier)[];
export type ingredientsFieldPolicy = {
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	drink_ingredients?: FieldPolicy<any> | FieldReadFunction<any>,
	drink_ingredients_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>,
	user_ingredients?: FieldPolicy<any> | FieldReadFunction<any>,
	user_ingredients_aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ingredients_aggregateKeySpecifier = ('aggregate' | 'nodes' | ingredients_aggregateKeySpecifier)[];
export type ingredients_aggregateFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ingredients_aggregate_fieldsKeySpecifier = ('avg' | 'count' | 'max' | 'min' | 'stddev' | 'stddev_pop' | 'stddev_samp' | 'sum' | 'var_pop' | 'var_samp' | 'variance' | ingredients_aggregate_fieldsKeySpecifier)[];
export type ingredients_aggregate_fieldsFieldPolicy = {
	avg?: FieldPolicy<any> | FieldReadFunction<any>,
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	max?: FieldPolicy<any> | FieldReadFunction<any>,
	min?: FieldPolicy<any> | FieldReadFunction<any>,
	stddev?: FieldPolicy<any> | FieldReadFunction<any>,
	stddev_pop?: FieldPolicy<any> | FieldReadFunction<any>,
	stddev_samp?: FieldPolicy<any> | FieldReadFunction<any>,
	sum?: FieldPolicy<any> | FieldReadFunction<any>,
	var_pop?: FieldPolicy<any> | FieldReadFunction<any>,
	var_samp?: FieldPolicy<any> | FieldReadFunction<any>,
	variance?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ingredients_avg_fieldsKeySpecifier = ('id' | ingredients_avg_fieldsKeySpecifier)[];
export type ingredients_avg_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ingredients_max_fieldsKeySpecifier = ('created_at' | 'id' | 'name' | 'updated_at' | ingredients_max_fieldsKeySpecifier)[];
export type ingredients_max_fieldsFieldPolicy = {
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ingredients_min_fieldsKeySpecifier = ('created_at' | 'id' | 'name' | 'updated_at' | ingredients_min_fieldsKeySpecifier)[];
export type ingredients_min_fieldsFieldPolicy = {
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ingredients_mutation_responseKeySpecifier = ('affected_rows' | 'returning' | ingredients_mutation_responseKeySpecifier)[];
export type ingredients_mutation_responseFieldPolicy = {
	affected_rows?: FieldPolicy<any> | FieldReadFunction<any>,
	returning?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ingredients_stddev_fieldsKeySpecifier = ('id' | ingredients_stddev_fieldsKeySpecifier)[];
export type ingredients_stddev_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ingredients_stddev_pop_fieldsKeySpecifier = ('id' | ingredients_stddev_pop_fieldsKeySpecifier)[];
export type ingredients_stddev_pop_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ingredients_stddev_samp_fieldsKeySpecifier = ('id' | ingredients_stddev_samp_fieldsKeySpecifier)[];
export type ingredients_stddev_samp_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ingredients_sum_fieldsKeySpecifier = ('id' | ingredients_sum_fieldsKeySpecifier)[];
export type ingredients_sum_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ingredients_var_pop_fieldsKeySpecifier = ('id' | ingredients_var_pop_fieldsKeySpecifier)[];
export type ingredients_var_pop_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ingredients_var_samp_fieldsKeySpecifier = ('id' | ingredients_var_samp_fieldsKeySpecifier)[];
export type ingredients_var_samp_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ingredients_variance_fieldsKeySpecifier = ('id' | ingredients_variance_fieldsKeySpecifier)[];
export type ingredients_variance_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type mutation_rootKeySpecifier = ('delete_drink_ingredients' | 'delete_drink_ingredients_by_pk' | 'delete_drinks' | 'delete_drinks_by_pk' | 'delete_ingredients' | 'delete_ingredients_by_pk' | 'delete_user_drinks' | 'delete_user_drinks_by_pk' | 'delete_user_ingredients' | 'delete_user_ingredients_by_pk' | 'delete_users' | 'delete_users_by_pk' | 'insert_drink_ingredients' | 'insert_drink_ingredients_one' | 'insert_drinks' | 'insert_drinks_one' | 'insert_ingredients' | 'insert_ingredients_one' | 'insert_user_drinks' | 'insert_user_drinks_one' | 'insert_user_ingredients' | 'insert_user_ingredients_one' | 'insert_users' | 'insert_users_one' | 'update_drink_ingredients' | 'update_drink_ingredients_by_pk' | 'update_drink_ingredients_many' | 'update_drinks' | 'update_drinks_by_pk' | 'update_drinks_many' | 'update_ingredients' | 'update_ingredients_by_pk' | 'update_ingredients_many' | 'update_user_drinks' | 'update_user_drinks_by_pk' | 'update_user_drinks_many' | 'update_user_ingredients' | 'update_user_ingredients_by_pk' | 'update_user_ingredients_many' | 'update_users' | 'update_users_by_pk' | 'update_users_many' | mutation_rootKeySpecifier)[];
export type mutation_rootFieldPolicy = {
	delete_drink_ingredients?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_drink_ingredients_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_drinks?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_drinks_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_ingredients?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_ingredients_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_user_drinks?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_user_drinks_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_user_ingredients?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_user_ingredients_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_users?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_users_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_drink_ingredients?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_drink_ingredients_one?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_drinks?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_drinks_one?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_ingredients?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_ingredients_one?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_user_drinks?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_user_drinks_one?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_user_ingredients?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_user_ingredients_one?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_users?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_users_one?: FieldPolicy<any> | FieldReadFunction<any>,
	update_drink_ingredients?: FieldPolicy<any> | FieldReadFunction<any>,
	update_drink_ingredients_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	update_drink_ingredients_many?: FieldPolicy<any> | FieldReadFunction<any>,
	update_drinks?: FieldPolicy<any> | FieldReadFunction<any>,
	update_drinks_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	update_drinks_many?: FieldPolicy<any> | FieldReadFunction<any>,
	update_ingredients?: FieldPolicy<any> | FieldReadFunction<any>,
	update_ingredients_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	update_ingredients_many?: FieldPolicy<any> | FieldReadFunction<any>,
	update_user_drinks?: FieldPolicy<any> | FieldReadFunction<any>,
	update_user_drinks_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	update_user_drinks_many?: FieldPolicy<any> | FieldReadFunction<any>,
	update_user_ingredients?: FieldPolicy<any> | FieldReadFunction<any>,
	update_user_ingredients_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	update_user_ingredients_many?: FieldPolicy<any> | FieldReadFunction<any>,
	update_users?: FieldPolicy<any> | FieldReadFunction<any>,
	update_users_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	update_users_many?: FieldPolicy<any> | FieldReadFunction<any>
};
export type query_rootKeySpecifier = ('drink_ingredients' | 'drink_ingredients_aggregate' | 'drink_ingredients_by_pk' | 'drinks' | 'drinks_aggregate' | 'drinks_by_pk' | 'ingredients' | 'ingredients_aggregate' | 'ingredients_by_pk' | 'user' | 'user_drinks' | 'user_drinks_aggregate' | 'user_drinks_by_pk' | 'user_ingredients' | 'user_ingredients_aggregate' | 'user_ingredients_by_pk' | 'users' | 'users_aggregate' | query_rootKeySpecifier)[];
export type query_rootFieldPolicy = {
	drink_ingredients?: FieldPolicy<any> | FieldReadFunction<any>,
	drink_ingredients_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	drink_ingredients_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	drinks?: FieldPolicy<any> | FieldReadFunction<any>,
	drinks_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	drinks_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	ingredients?: FieldPolicy<any> | FieldReadFunction<any>,
	ingredients_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	ingredients_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	user_drinks?: FieldPolicy<any> | FieldReadFunction<any>,
	user_drinks_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	user_drinks_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	user_ingredients?: FieldPolicy<any> | FieldReadFunction<any>,
	user_ingredients_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	user_ingredients_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	users?: FieldPolicy<any> | FieldReadFunction<any>,
	users_aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type subscription_rootKeySpecifier = ('drink_ingredients' | 'drink_ingredients_aggregate' | 'drink_ingredients_by_pk' | 'drink_ingredients_stream' | 'drinks' | 'drinks_aggregate' | 'drinks_by_pk' | 'drinks_stream' | 'ingredients' | 'ingredients_aggregate' | 'ingredients_by_pk' | 'ingredients_stream' | 'user' | 'user_drinks' | 'user_drinks_aggregate' | 'user_drinks_by_pk' | 'user_drinks_stream' | 'user_ingredients' | 'user_ingredients_aggregate' | 'user_ingredients_by_pk' | 'user_ingredients_stream' | 'users' | 'users_aggregate' | 'users_stream' | subscription_rootKeySpecifier)[];
export type subscription_rootFieldPolicy = {
	drink_ingredients?: FieldPolicy<any> | FieldReadFunction<any>,
	drink_ingredients_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	drink_ingredients_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	drink_ingredients_stream?: FieldPolicy<any> | FieldReadFunction<any>,
	drinks?: FieldPolicy<any> | FieldReadFunction<any>,
	drinks_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	drinks_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	drinks_stream?: FieldPolicy<any> | FieldReadFunction<any>,
	ingredients?: FieldPolicy<any> | FieldReadFunction<any>,
	ingredients_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	ingredients_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	ingredients_stream?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	user_drinks?: FieldPolicy<any> | FieldReadFunction<any>,
	user_drinks_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	user_drinks_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	user_drinks_stream?: FieldPolicy<any> | FieldReadFunction<any>,
	user_ingredients?: FieldPolicy<any> | FieldReadFunction<any>,
	user_ingredients_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	user_ingredients_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	user_ingredients_stream?: FieldPolicy<any> | FieldReadFunction<any>,
	users?: FieldPolicy<any> | FieldReadFunction<any>,
	users_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	users_stream?: FieldPolicy<any> | FieldReadFunction<any>
};
export type user_drinksKeySpecifier = ('created_at' | 'drink' | 'drink_id' | 'id' | 'updated_at' | 'user' | 'user_id' | user_drinksKeySpecifier)[];
export type user_drinksFieldPolicy = {
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	drink?: FieldPolicy<any> | FieldReadFunction<any>,
	drink_id?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	user_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type user_drinks_aggregateKeySpecifier = ('aggregate' | 'nodes' | user_drinks_aggregateKeySpecifier)[];
export type user_drinks_aggregateFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>
};
export type user_drinks_aggregate_fieldsKeySpecifier = ('avg' | 'count' | 'max' | 'min' | 'stddev' | 'stddev_pop' | 'stddev_samp' | 'sum' | 'var_pop' | 'var_samp' | 'variance' | user_drinks_aggregate_fieldsKeySpecifier)[];
export type user_drinks_aggregate_fieldsFieldPolicy = {
	avg?: FieldPolicy<any> | FieldReadFunction<any>,
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	max?: FieldPolicy<any> | FieldReadFunction<any>,
	min?: FieldPolicy<any> | FieldReadFunction<any>,
	stddev?: FieldPolicy<any> | FieldReadFunction<any>,
	stddev_pop?: FieldPolicy<any> | FieldReadFunction<any>,
	stddev_samp?: FieldPolicy<any> | FieldReadFunction<any>,
	sum?: FieldPolicy<any> | FieldReadFunction<any>,
	var_pop?: FieldPolicy<any> | FieldReadFunction<any>,
	var_samp?: FieldPolicy<any> | FieldReadFunction<any>,
	variance?: FieldPolicy<any> | FieldReadFunction<any>
};
export type user_drinks_avg_fieldsKeySpecifier = ('drink_id' | 'id' | 'user_id' | user_drinks_avg_fieldsKeySpecifier)[];
export type user_drinks_avg_fieldsFieldPolicy = {
	drink_id?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	user_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type user_drinks_max_fieldsKeySpecifier = ('created_at' | 'drink_id' | 'id' | 'updated_at' | 'user_id' | user_drinks_max_fieldsKeySpecifier)[];
export type user_drinks_max_fieldsFieldPolicy = {
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	drink_id?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>,
	user_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type user_drinks_min_fieldsKeySpecifier = ('created_at' | 'drink_id' | 'id' | 'updated_at' | 'user_id' | user_drinks_min_fieldsKeySpecifier)[];
export type user_drinks_min_fieldsFieldPolicy = {
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	drink_id?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>,
	user_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type user_drinks_mutation_responseKeySpecifier = ('affected_rows' | 'returning' | user_drinks_mutation_responseKeySpecifier)[];
export type user_drinks_mutation_responseFieldPolicy = {
	affected_rows?: FieldPolicy<any> | FieldReadFunction<any>,
	returning?: FieldPolicy<any> | FieldReadFunction<any>
};
export type user_drinks_stddev_fieldsKeySpecifier = ('drink_id' | 'id' | 'user_id' | user_drinks_stddev_fieldsKeySpecifier)[];
export type user_drinks_stddev_fieldsFieldPolicy = {
	drink_id?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	user_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type user_drinks_stddev_pop_fieldsKeySpecifier = ('drink_id' | 'id' | 'user_id' | user_drinks_stddev_pop_fieldsKeySpecifier)[];
export type user_drinks_stddev_pop_fieldsFieldPolicy = {
	drink_id?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	user_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type user_drinks_stddev_samp_fieldsKeySpecifier = ('drink_id' | 'id' | 'user_id' | user_drinks_stddev_samp_fieldsKeySpecifier)[];
export type user_drinks_stddev_samp_fieldsFieldPolicy = {
	drink_id?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	user_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type user_drinks_sum_fieldsKeySpecifier = ('drink_id' | 'id' | 'user_id' | user_drinks_sum_fieldsKeySpecifier)[];
export type user_drinks_sum_fieldsFieldPolicy = {
	drink_id?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	user_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type user_drinks_var_pop_fieldsKeySpecifier = ('drink_id' | 'id' | 'user_id' | user_drinks_var_pop_fieldsKeySpecifier)[];
export type user_drinks_var_pop_fieldsFieldPolicy = {
	drink_id?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	user_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type user_drinks_var_samp_fieldsKeySpecifier = ('drink_id' | 'id' | 'user_id' | user_drinks_var_samp_fieldsKeySpecifier)[];
export type user_drinks_var_samp_fieldsFieldPolicy = {
	drink_id?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	user_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type user_drinks_variance_fieldsKeySpecifier = ('drink_id' | 'id' | 'user_id' | user_drinks_variance_fieldsKeySpecifier)[];
export type user_drinks_variance_fieldsFieldPolicy = {
	drink_id?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	user_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type user_ingredientsKeySpecifier = ('brand' | 'category' | 'created_at' | 'id' | 'ingredient' | 'ingredient_id' | 'sub_category' | 'updated_at' | 'user' | 'user_id' | user_ingredientsKeySpecifier)[];
export type user_ingredientsFieldPolicy = {
	brand?: FieldPolicy<any> | FieldReadFunction<any>,
	category?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	ingredient?: FieldPolicy<any> | FieldReadFunction<any>,
	ingredient_id?: FieldPolicy<any> | FieldReadFunction<any>,
	sub_category?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	user_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type user_ingredients_aggregateKeySpecifier = ('aggregate' | 'nodes' | user_ingredients_aggregateKeySpecifier)[];
export type user_ingredients_aggregateFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>
};
export type user_ingredients_aggregate_fieldsKeySpecifier = ('avg' | 'count' | 'max' | 'min' | 'stddev' | 'stddev_pop' | 'stddev_samp' | 'sum' | 'var_pop' | 'var_samp' | 'variance' | user_ingredients_aggregate_fieldsKeySpecifier)[];
export type user_ingredients_aggregate_fieldsFieldPolicy = {
	avg?: FieldPolicy<any> | FieldReadFunction<any>,
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	max?: FieldPolicy<any> | FieldReadFunction<any>,
	min?: FieldPolicy<any> | FieldReadFunction<any>,
	stddev?: FieldPolicy<any> | FieldReadFunction<any>,
	stddev_pop?: FieldPolicy<any> | FieldReadFunction<any>,
	stddev_samp?: FieldPolicy<any> | FieldReadFunction<any>,
	sum?: FieldPolicy<any> | FieldReadFunction<any>,
	var_pop?: FieldPolicy<any> | FieldReadFunction<any>,
	var_samp?: FieldPolicy<any> | FieldReadFunction<any>,
	variance?: FieldPolicy<any> | FieldReadFunction<any>
};
export type user_ingredients_avg_fieldsKeySpecifier = ('id' | 'ingredient_id' | 'user_id' | user_ingredients_avg_fieldsKeySpecifier)[];
export type user_ingredients_avg_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	ingredient_id?: FieldPolicy<any> | FieldReadFunction<any>,
	user_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type user_ingredients_max_fieldsKeySpecifier = ('brand' | 'category' | 'created_at' | 'id' | 'ingredient_id' | 'sub_category' | 'updated_at' | 'user_id' | user_ingredients_max_fieldsKeySpecifier)[];
export type user_ingredients_max_fieldsFieldPolicy = {
	brand?: FieldPolicy<any> | FieldReadFunction<any>,
	category?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	ingredient_id?: FieldPolicy<any> | FieldReadFunction<any>,
	sub_category?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>,
	user_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type user_ingredients_min_fieldsKeySpecifier = ('brand' | 'category' | 'created_at' | 'id' | 'ingredient_id' | 'sub_category' | 'updated_at' | 'user_id' | user_ingredients_min_fieldsKeySpecifier)[];
export type user_ingredients_min_fieldsFieldPolicy = {
	brand?: FieldPolicy<any> | FieldReadFunction<any>,
	category?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	ingredient_id?: FieldPolicy<any> | FieldReadFunction<any>,
	sub_category?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>,
	user_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type user_ingredients_mutation_responseKeySpecifier = ('affected_rows' | 'returning' | user_ingredients_mutation_responseKeySpecifier)[];
export type user_ingredients_mutation_responseFieldPolicy = {
	affected_rows?: FieldPolicy<any> | FieldReadFunction<any>,
	returning?: FieldPolicy<any> | FieldReadFunction<any>
};
export type user_ingredients_stddev_fieldsKeySpecifier = ('id' | 'ingredient_id' | 'user_id' | user_ingredients_stddev_fieldsKeySpecifier)[];
export type user_ingredients_stddev_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	ingredient_id?: FieldPolicy<any> | FieldReadFunction<any>,
	user_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type user_ingredients_stddev_pop_fieldsKeySpecifier = ('id' | 'ingredient_id' | 'user_id' | user_ingredients_stddev_pop_fieldsKeySpecifier)[];
export type user_ingredients_stddev_pop_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	ingredient_id?: FieldPolicy<any> | FieldReadFunction<any>,
	user_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type user_ingredients_stddev_samp_fieldsKeySpecifier = ('id' | 'ingredient_id' | 'user_id' | user_ingredients_stddev_samp_fieldsKeySpecifier)[];
export type user_ingredients_stddev_samp_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	ingredient_id?: FieldPolicy<any> | FieldReadFunction<any>,
	user_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type user_ingredients_sum_fieldsKeySpecifier = ('id' | 'ingredient_id' | 'user_id' | user_ingredients_sum_fieldsKeySpecifier)[];
export type user_ingredients_sum_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	ingredient_id?: FieldPolicy<any> | FieldReadFunction<any>,
	user_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type user_ingredients_var_pop_fieldsKeySpecifier = ('id' | 'ingredient_id' | 'user_id' | user_ingredients_var_pop_fieldsKeySpecifier)[];
export type user_ingredients_var_pop_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	ingredient_id?: FieldPolicy<any> | FieldReadFunction<any>,
	user_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type user_ingredients_var_samp_fieldsKeySpecifier = ('id' | 'ingredient_id' | 'user_id' | user_ingredients_var_samp_fieldsKeySpecifier)[];
export type user_ingredients_var_samp_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	ingredient_id?: FieldPolicy<any> | FieldReadFunction<any>,
	user_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type user_ingredients_variance_fieldsKeySpecifier = ('id' | 'ingredient_id' | 'user_id' | user_ingredients_variance_fieldsKeySpecifier)[];
export type user_ingredients_variance_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	ingredient_id?: FieldPolicy<any> | FieldReadFunction<any>,
	user_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type usersKeySpecifier = ('created_at' | 'deleted_at' | 'drinks' | 'drinks_aggregate' | 'email' | 'email_verified_at' | 'id' | 'name' | 'password' | 'remember_token' | 'updated_at' | 'user_drinks' | 'user_drinks_aggregate' | 'user_ingredients' | 'user_ingredients_aggregate' | usersKeySpecifier)[];
export type usersFieldPolicy = {
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	deleted_at?: FieldPolicy<any> | FieldReadFunction<any>,
	drinks?: FieldPolicy<any> | FieldReadFunction<any>,
	drinks_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	email_verified_at?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	password?: FieldPolicy<any> | FieldReadFunction<any>,
	remember_token?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>,
	user_drinks?: FieldPolicy<any> | FieldReadFunction<any>,
	user_drinks_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	user_ingredients?: FieldPolicy<any> | FieldReadFunction<any>,
	user_ingredients_aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type users_aggregateKeySpecifier = ('aggregate' | 'nodes' | users_aggregateKeySpecifier)[];
export type users_aggregateFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>
};
export type users_aggregate_fieldsKeySpecifier = ('avg' | 'count' | 'max' | 'min' | 'stddev' | 'stddev_pop' | 'stddev_samp' | 'sum' | 'var_pop' | 'var_samp' | 'variance' | users_aggregate_fieldsKeySpecifier)[];
export type users_aggregate_fieldsFieldPolicy = {
	avg?: FieldPolicy<any> | FieldReadFunction<any>,
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	max?: FieldPolicy<any> | FieldReadFunction<any>,
	min?: FieldPolicy<any> | FieldReadFunction<any>,
	stddev?: FieldPolicy<any> | FieldReadFunction<any>,
	stddev_pop?: FieldPolicy<any> | FieldReadFunction<any>,
	stddev_samp?: FieldPolicy<any> | FieldReadFunction<any>,
	sum?: FieldPolicy<any> | FieldReadFunction<any>,
	var_pop?: FieldPolicy<any> | FieldReadFunction<any>,
	var_samp?: FieldPolicy<any> | FieldReadFunction<any>,
	variance?: FieldPolicy<any> | FieldReadFunction<any>
};
export type users_avg_fieldsKeySpecifier = ('id' | users_avg_fieldsKeySpecifier)[];
export type users_avg_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type users_max_fieldsKeySpecifier = ('created_at' | 'deleted_at' | 'email' | 'email_verified_at' | 'id' | 'name' | 'password' | 'remember_token' | 'updated_at' | users_max_fieldsKeySpecifier)[];
export type users_max_fieldsFieldPolicy = {
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	deleted_at?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	email_verified_at?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	password?: FieldPolicy<any> | FieldReadFunction<any>,
	remember_token?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>
};
export type users_min_fieldsKeySpecifier = ('created_at' | 'deleted_at' | 'email' | 'email_verified_at' | 'id' | 'name' | 'password' | 'remember_token' | 'updated_at' | users_min_fieldsKeySpecifier)[];
export type users_min_fieldsFieldPolicy = {
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	deleted_at?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	email_verified_at?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	password?: FieldPolicy<any> | FieldReadFunction<any>,
	remember_token?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>
};
export type users_mutation_responseKeySpecifier = ('affected_rows' | 'returning' | users_mutation_responseKeySpecifier)[];
export type users_mutation_responseFieldPolicy = {
	affected_rows?: FieldPolicy<any> | FieldReadFunction<any>,
	returning?: FieldPolicy<any> | FieldReadFunction<any>
};
export type users_stddev_fieldsKeySpecifier = ('id' | users_stddev_fieldsKeySpecifier)[];
export type users_stddev_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type users_stddev_pop_fieldsKeySpecifier = ('id' | users_stddev_pop_fieldsKeySpecifier)[];
export type users_stddev_pop_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type users_stddev_samp_fieldsKeySpecifier = ('id' | users_stddev_samp_fieldsKeySpecifier)[];
export type users_stddev_samp_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type users_sum_fieldsKeySpecifier = ('id' | users_sum_fieldsKeySpecifier)[];
export type users_sum_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type users_var_pop_fieldsKeySpecifier = ('id' | users_var_pop_fieldsKeySpecifier)[];
export type users_var_pop_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type users_var_samp_fieldsKeySpecifier = ('id' | users_var_samp_fieldsKeySpecifier)[];
export type users_var_samp_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type users_variance_fieldsKeySpecifier = ('id' | users_variance_fieldsKeySpecifier)[];
export type users_variance_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StrictTypedTypePolicies = {
	drink_ingredients?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | drink_ingredientsKeySpecifier | (() => undefined | drink_ingredientsKeySpecifier),
		fields?: drink_ingredientsFieldPolicy,
	},
	drink_ingredients_aggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | drink_ingredients_aggregateKeySpecifier | (() => undefined | drink_ingredients_aggregateKeySpecifier),
		fields?: drink_ingredients_aggregateFieldPolicy,
	},
	drink_ingredients_aggregate_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | drink_ingredients_aggregate_fieldsKeySpecifier | (() => undefined | drink_ingredients_aggregate_fieldsKeySpecifier),
		fields?: drink_ingredients_aggregate_fieldsFieldPolicy,
	},
	drink_ingredients_avg_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | drink_ingredients_avg_fieldsKeySpecifier | (() => undefined | drink_ingredients_avg_fieldsKeySpecifier),
		fields?: drink_ingredients_avg_fieldsFieldPolicy,
	},
	drink_ingredients_max_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | drink_ingredients_max_fieldsKeySpecifier | (() => undefined | drink_ingredients_max_fieldsKeySpecifier),
		fields?: drink_ingredients_max_fieldsFieldPolicy,
	},
	drink_ingredients_min_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | drink_ingredients_min_fieldsKeySpecifier | (() => undefined | drink_ingredients_min_fieldsKeySpecifier),
		fields?: drink_ingredients_min_fieldsFieldPolicy,
	},
	drink_ingredients_mutation_response?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | drink_ingredients_mutation_responseKeySpecifier | (() => undefined | drink_ingredients_mutation_responseKeySpecifier),
		fields?: drink_ingredients_mutation_responseFieldPolicy,
	},
	drink_ingredients_stddev_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | drink_ingredients_stddev_fieldsKeySpecifier | (() => undefined | drink_ingredients_stddev_fieldsKeySpecifier),
		fields?: drink_ingredients_stddev_fieldsFieldPolicy,
	},
	drink_ingredients_stddev_pop_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | drink_ingredients_stddev_pop_fieldsKeySpecifier | (() => undefined | drink_ingredients_stddev_pop_fieldsKeySpecifier),
		fields?: drink_ingredients_stddev_pop_fieldsFieldPolicy,
	},
	drink_ingredients_stddev_samp_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | drink_ingredients_stddev_samp_fieldsKeySpecifier | (() => undefined | drink_ingredients_stddev_samp_fieldsKeySpecifier),
		fields?: drink_ingredients_stddev_samp_fieldsFieldPolicy,
	},
	drink_ingredients_sum_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | drink_ingredients_sum_fieldsKeySpecifier | (() => undefined | drink_ingredients_sum_fieldsKeySpecifier),
		fields?: drink_ingredients_sum_fieldsFieldPolicy,
	},
	drink_ingredients_var_pop_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | drink_ingredients_var_pop_fieldsKeySpecifier | (() => undefined | drink_ingredients_var_pop_fieldsKeySpecifier),
		fields?: drink_ingredients_var_pop_fieldsFieldPolicy,
	},
	drink_ingredients_var_samp_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | drink_ingredients_var_samp_fieldsKeySpecifier | (() => undefined | drink_ingredients_var_samp_fieldsKeySpecifier),
		fields?: drink_ingredients_var_samp_fieldsFieldPolicy,
	},
	drink_ingredients_variance_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | drink_ingredients_variance_fieldsKeySpecifier | (() => undefined | drink_ingredients_variance_fieldsKeySpecifier),
		fields?: drink_ingredients_variance_fieldsFieldPolicy,
	},
	drinks?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | drinksKeySpecifier | (() => undefined | drinksKeySpecifier),
		fields?: drinksFieldPolicy,
	},
	drinks_aggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | drinks_aggregateKeySpecifier | (() => undefined | drinks_aggregateKeySpecifier),
		fields?: drinks_aggregateFieldPolicy,
	},
	drinks_aggregate_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | drinks_aggregate_fieldsKeySpecifier | (() => undefined | drinks_aggregate_fieldsKeySpecifier),
		fields?: drinks_aggregate_fieldsFieldPolicy,
	},
	drinks_avg_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | drinks_avg_fieldsKeySpecifier | (() => undefined | drinks_avg_fieldsKeySpecifier),
		fields?: drinks_avg_fieldsFieldPolicy,
	},
	drinks_max_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | drinks_max_fieldsKeySpecifier | (() => undefined | drinks_max_fieldsKeySpecifier),
		fields?: drinks_max_fieldsFieldPolicy,
	},
	drinks_min_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | drinks_min_fieldsKeySpecifier | (() => undefined | drinks_min_fieldsKeySpecifier),
		fields?: drinks_min_fieldsFieldPolicy,
	},
	drinks_mutation_response?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | drinks_mutation_responseKeySpecifier | (() => undefined | drinks_mutation_responseKeySpecifier),
		fields?: drinks_mutation_responseFieldPolicy,
	},
	drinks_stddev_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | drinks_stddev_fieldsKeySpecifier | (() => undefined | drinks_stddev_fieldsKeySpecifier),
		fields?: drinks_stddev_fieldsFieldPolicy,
	},
	drinks_stddev_pop_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | drinks_stddev_pop_fieldsKeySpecifier | (() => undefined | drinks_stddev_pop_fieldsKeySpecifier),
		fields?: drinks_stddev_pop_fieldsFieldPolicy,
	},
	drinks_stddev_samp_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | drinks_stddev_samp_fieldsKeySpecifier | (() => undefined | drinks_stddev_samp_fieldsKeySpecifier),
		fields?: drinks_stddev_samp_fieldsFieldPolicy,
	},
	drinks_sum_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | drinks_sum_fieldsKeySpecifier | (() => undefined | drinks_sum_fieldsKeySpecifier),
		fields?: drinks_sum_fieldsFieldPolicy,
	},
	drinks_var_pop_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | drinks_var_pop_fieldsKeySpecifier | (() => undefined | drinks_var_pop_fieldsKeySpecifier),
		fields?: drinks_var_pop_fieldsFieldPolicy,
	},
	drinks_var_samp_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | drinks_var_samp_fieldsKeySpecifier | (() => undefined | drinks_var_samp_fieldsKeySpecifier),
		fields?: drinks_var_samp_fieldsFieldPolicy,
	},
	drinks_variance_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | drinks_variance_fieldsKeySpecifier | (() => undefined | drinks_variance_fieldsKeySpecifier),
		fields?: drinks_variance_fieldsFieldPolicy,
	},
	ingredients?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ingredientsKeySpecifier | (() => undefined | ingredientsKeySpecifier),
		fields?: ingredientsFieldPolicy,
	},
	ingredients_aggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ingredients_aggregateKeySpecifier | (() => undefined | ingredients_aggregateKeySpecifier),
		fields?: ingredients_aggregateFieldPolicy,
	},
	ingredients_aggregate_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ingredients_aggregate_fieldsKeySpecifier | (() => undefined | ingredients_aggregate_fieldsKeySpecifier),
		fields?: ingredients_aggregate_fieldsFieldPolicy,
	},
	ingredients_avg_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ingredients_avg_fieldsKeySpecifier | (() => undefined | ingredients_avg_fieldsKeySpecifier),
		fields?: ingredients_avg_fieldsFieldPolicy,
	},
	ingredients_max_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ingredients_max_fieldsKeySpecifier | (() => undefined | ingredients_max_fieldsKeySpecifier),
		fields?: ingredients_max_fieldsFieldPolicy,
	},
	ingredients_min_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ingredients_min_fieldsKeySpecifier | (() => undefined | ingredients_min_fieldsKeySpecifier),
		fields?: ingredients_min_fieldsFieldPolicy,
	},
	ingredients_mutation_response?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ingredients_mutation_responseKeySpecifier | (() => undefined | ingredients_mutation_responseKeySpecifier),
		fields?: ingredients_mutation_responseFieldPolicy,
	},
	ingredients_stddev_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ingredients_stddev_fieldsKeySpecifier | (() => undefined | ingredients_stddev_fieldsKeySpecifier),
		fields?: ingredients_stddev_fieldsFieldPolicy,
	},
	ingredients_stddev_pop_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ingredients_stddev_pop_fieldsKeySpecifier | (() => undefined | ingredients_stddev_pop_fieldsKeySpecifier),
		fields?: ingredients_stddev_pop_fieldsFieldPolicy,
	},
	ingredients_stddev_samp_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ingredients_stddev_samp_fieldsKeySpecifier | (() => undefined | ingredients_stddev_samp_fieldsKeySpecifier),
		fields?: ingredients_stddev_samp_fieldsFieldPolicy,
	},
	ingredients_sum_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ingredients_sum_fieldsKeySpecifier | (() => undefined | ingredients_sum_fieldsKeySpecifier),
		fields?: ingredients_sum_fieldsFieldPolicy,
	},
	ingredients_var_pop_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ingredients_var_pop_fieldsKeySpecifier | (() => undefined | ingredients_var_pop_fieldsKeySpecifier),
		fields?: ingredients_var_pop_fieldsFieldPolicy,
	},
	ingredients_var_samp_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ingredients_var_samp_fieldsKeySpecifier | (() => undefined | ingredients_var_samp_fieldsKeySpecifier),
		fields?: ingredients_var_samp_fieldsFieldPolicy,
	},
	ingredients_variance_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ingredients_variance_fieldsKeySpecifier | (() => undefined | ingredients_variance_fieldsKeySpecifier),
		fields?: ingredients_variance_fieldsFieldPolicy,
	},
	mutation_root?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | mutation_rootKeySpecifier | (() => undefined | mutation_rootKeySpecifier),
		fields?: mutation_rootFieldPolicy,
	},
	query_root?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | query_rootKeySpecifier | (() => undefined | query_rootKeySpecifier),
		fields?: query_rootFieldPolicy,
	},
	subscription_root?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | subscription_rootKeySpecifier | (() => undefined | subscription_rootKeySpecifier),
		fields?: subscription_rootFieldPolicy,
	},
	user_drinks?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | user_drinksKeySpecifier | (() => undefined | user_drinksKeySpecifier),
		fields?: user_drinksFieldPolicy,
	},
	user_drinks_aggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | user_drinks_aggregateKeySpecifier | (() => undefined | user_drinks_aggregateKeySpecifier),
		fields?: user_drinks_aggregateFieldPolicy,
	},
	user_drinks_aggregate_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | user_drinks_aggregate_fieldsKeySpecifier | (() => undefined | user_drinks_aggregate_fieldsKeySpecifier),
		fields?: user_drinks_aggregate_fieldsFieldPolicy,
	},
	user_drinks_avg_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | user_drinks_avg_fieldsKeySpecifier | (() => undefined | user_drinks_avg_fieldsKeySpecifier),
		fields?: user_drinks_avg_fieldsFieldPolicy,
	},
	user_drinks_max_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | user_drinks_max_fieldsKeySpecifier | (() => undefined | user_drinks_max_fieldsKeySpecifier),
		fields?: user_drinks_max_fieldsFieldPolicy,
	},
	user_drinks_min_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | user_drinks_min_fieldsKeySpecifier | (() => undefined | user_drinks_min_fieldsKeySpecifier),
		fields?: user_drinks_min_fieldsFieldPolicy,
	},
	user_drinks_mutation_response?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | user_drinks_mutation_responseKeySpecifier | (() => undefined | user_drinks_mutation_responseKeySpecifier),
		fields?: user_drinks_mutation_responseFieldPolicy,
	},
	user_drinks_stddev_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | user_drinks_stddev_fieldsKeySpecifier | (() => undefined | user_drinks_stddev_fieldsKeySpecifier),
		fields?: user_drinks_stddev_fieldsFieldPolicy,
	},
	user_drinks_stddev_pop_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | user_drinks_stddev_pop_fieldsKeySpecifier | (() => undefined | user_drinks_stddev_pop_fieldsKeySpecifier),
		fields?: user_drinks_stddev_pop_fieldsFieldPolicy,
	},
	user_drinks_stddev_samp_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | user_drinks_stddev_samp_fieldsKeySpecifier | (() => undefined | user_drinks_stddev_samp_fieldsKeySpecifier),
		fields?: user_drinks_stddev_samp_fieldsFieldPolicy,
	},
	user_drinks_sum_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | user_drinks_sum_fieldsKeySpecifier | (() => undefined | user_drinks_sum_fieldsKeySpecifier),
		fields?: user_drinks_sum_fieldsFieldPolicy,
	},
	user_drinks_var_pop_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | user_drinks_var_pop_fieldsKeySpecifier | (() => undefined | user_drinks_var_pop_fieldsKeySpecifier),
		fields?: user_drinks_var_pop_fieldsFieldPolicy,
	},
	user_drinks_var_samp_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | user_drinks_var_samp_fieldsKeySpecifier | (() => undefined | user_drinks_var_samp_fieldsKeySpecifier),
		fields?: user_drinks_var_samp_fieldsFieldPolicy,
	},
	user_drinks_variance_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | user_drinks_variance_fieldsKeySpecifier | (() => undefined | user_drinks_variance_fieldsKeySpecifier),
		fields?: user_drinks_variance_fieldsFieldPolicy,
	},
	user_ingredients?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | user_ingredientsKeySpecifier | (() => undefined | user_ingredientsKeySpecifier),
		fields?: user_ingredientsFieldPolicy,
	},
	user_ingredients_aggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | user_ingredients_aggregateKeySpecifier | (() => undefined | user_ingredients_aggregateKeySpecifier),
		fields?: user_ingredients_aggregateFieldPolicy,
	},
	user_ingredients_aggregate_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | user_ingredients_aggregate_fieldsKeySpecifier | (() => undefined | user_ingredients_aggregate_fieldsKeySpecifier),
		fields?: user_ingredients_aggregate_fieldsFieldPolicy,
	},
	user_ingredients_avg_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | user_ingredients_avg_fieldsKeySpecifier | (() => undefined | user_ingredients_avg_fieldsKeySpecifier),
		fields?: user_ingredients_avg_fieldsFieldPolicy,
	},
	user_ingredients_max_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | user_ingredients_max_fieldsKeySpecifier | (() => undefined | user_ingredients_max_fieldsKeySpecifier),
		fields?: user_ingredients_max_fieldsFieldPolicy,
	},
	user_ingredients_min_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | user_ingredients_min_fieldsKeySpecifier | (() => undefined | user_ingredients_min_fieldsKeySpecifier),
		fields?: user_ingredients_min_fieldsFieldPolicy,
	},
	user_ingredients_mutation_response?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | user_ingredients_mutation_responseKeySpecifier | (() => undefined | user_ingredients_mutation_responseKeySpecifier),
		fields?: user_ingredients_mutation_responseFieldPolicy,
	},
	user_ingredients_stddev_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | user_ingredients_stddev_fieldsKeySpecifier | (() => undefined | user_ingredients_stddev_fieldsKeySpecifier),
		fields?: user_ingredients_stddev_fieldsFieldPolicy,
	},
	user_ingredients_stddev_pop_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | user_ingredients_stddev_pop_fieldsKeySpecifier | (() => undefined | user_ingredients_stddev_pop_fieldsKeySpecifier),
		fields?: user_ingredients_stddev_pop_fieldsFieldPolicy,
	},
	user_ingredients_stddev_samp_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | user_ingredients_stddev_samp_fieldsKeySpecifier | (() => undefined | user_ingredients_stddev_samp_fieldsKeySpecifier),
		fields?: user_ingredients_stddev_samp_fieldsFieldPolicy,
	},
	user_ingredients_sum_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | user_ingredients_sum_fieldsKeySpecifier | (() => undefined | user_ingredients_sum_fieldsKeySpecifier),
		fields?: user_ingredients_sum_fieldsFieldPolicy,
	},
	user_ingredients_var_pop_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | user_ingredients_var_pop_fieldsKeySpecifier | (() => undefined | user_ingredients_var_pop_fieldsKeySpecifier),
		fields?: user_ingredients_var_pop_fieldsFieldPolicy,
	},
	user_ingredients_var_samp_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | user_ingredients_var_samp_fieldsKeySpecifier | (() => undefined | user_ingredients_var_samp_fieldsKeySpecifier),
		fields?: user_ingredients_var_samp_fieldsFieldPolicy,
	},
	user_ingredients_variance_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | user_ingredients_variance_fieldsKeySpecifier | (() => undefined | user_ingredients_variance_fieldsKeySpecifier),
		fields?: user_ingredients_variance_fieldsFieldPolicy,
	},
	users?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | usersKeySpecifier | (() => undefined | usersKeySpecifier),
		fields?: usersFieldPolicy,
	},
	users_aggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | users_aggregateKeySpecifier | (() => undefined | users_aggregateKeySpecifier),
		fields?: users_aggregateFieldPolicy,
	},
	users_aggregate_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | users_aggregate_fieldsKeySpecifier | (() => undefined | users_aggregate_fieldsKeySpecifier),
		fields?: users_aggregate_fieldsFieldPolicy,
	},
	users_avg_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | users_avg_fieldsKeySpecifier | (() => undefined | users_avg_fieldsKeySpecifier),
		fields?: users_avg_fieldsFieldPolicy,
	},
	users_max_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | users_max_fieldsKeySpecifier | (() => undefined | users_max_fieldsKeySpecifier),
		fields?: users_max_fieldsFieldPolicy,
	},
	users_min_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | users_min_fieldsKeySpecifier | (() => undefined | users_min_fieldsKeySpecifier),
		fields?: users_min_fieldsFieldPolicy,
	},
	users_mutation_response?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | users_mutation_responseKeySpecifier | (() => undefined | users_mutation_responseKeySpecifier),
		fields?: users_mutation_responseFieldPolicy,
	},
	users_stddev_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | users_stddev_fieldsKeySpecifier | (() => undefined | users_stddev_fieldsKeySpecifier),
		fields?: users_stddev_fieldsFieldPolicy,
	},
	users_stddev_pop_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | users_stddev_pop_fieldsKeySpecifier | (() => undefined | users_stddev_pop_fieldsKeySpecifier),
		fields?: users_stddev_pop_fieldsFieldPolicy,
	},
	users_stddev_samp_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | users_stddev_samp_fieldsKeySpecifier | (() => undefined | users_stddev_samp_fieldsKeySpecifier),
		fields?: users_stddev_samp_fieldsFieldPolicy,
	},
	users_sum_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | users_sum_fieldsKeySpecifier | (() => undefined | users_sum_fieldsKeySpecifier),
		fields?: users_sum_fieldsFieldPolicy,
	},
	users_var_pop_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | users_var_pop_fieldsKeySpecifier | (() => undefined | users_var_pop_fieldsKeySpecifier),
		fields?: users_var_pop_fieldsFieldPolicy,
	},
	users_var_samp_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | users_var_samp_fieldsKeySpecifier | (() => undefined | users_var_samp_fieldsKeySpecifier),
		fields?: users_var_samp_fieldsFieldPolicy,
	},
	users_variance_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | users_variance_fieldsKeySpecifier | (() => undefined | users_variance_fieldsKeySpecifier),
		fields?: users_variance_fieldsFieldPolicy,
	}
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;
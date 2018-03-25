/*
 * Copyright 2018 NEM
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * NIS2 API
 * This document defines all the nis2 api routes and behaviour
 *
 * OpenAPI spec version: 1.0.0
 * Contact: guillemchain@gmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import BlockInfoDTO from '../model/BlockInfoDTO';
import BlockchainScoreDTO from '../model/BlockchainScoreDTO';
import BlockchainStorageInfoDTO from '../model/BlockchainStorageInfoDTO';
import HeightDTO from '../model/HeightDTO';

/**
 * BlockchainRoutes service.
 * @module api/BlockchainRoutesApi
 * @version 1.0.0
 */
export default class BlockchainRoutesApi {

	/**
	 * Constructs a new BlockchainRoutesApi.
	 * @alias module:api/BlockchainRoutesApi
	 * @class
	 * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
	 * default to {@link module:ApiClient#instance} if unspecified.
	 */
	constructor(apiClient) {
		this.apiClient = apiClient || ApiClient.instance;
	}


	/**
	 * Get block information
	 * Returns block information for a given block height
	 * @param {Number} height Block height
	 * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BlockInfoDTO} and HTTP response
	 */
	getBlockByHeightWithHttpInfo(height) {
		let postBody = null;

		// verify the required parameter 'height' is set
		if (height === undefined || height === null) {
			throw new Error("Missing the required parameter 'height' when calling getBlockByHeight");
		}


		let pathParams = {
			'height': height
		};
		let queryParams = {};
		let headerParams = {};
		let formParams = {};

		let authNames = [];
		let contentTypes = [];
		let accepts = ['application/json'];
		let returnType = BlockInfoDTO;

		return this.apiClient.callApi(
			'/block/{height}', 'GET',
			pathParams, queryParams, headerParams, formParams, postBody,
			authNames, contentTypes, accepts, returnType
		);
	}

	/**
	 * Get block information
	 * Returns block information for a given block height
	 * @param {Number} height Block height
	 * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BlockInfoDTO}
	 */
	getBlockByHeight(height) {
		return this.getBlockByHeightWithHttpInfo(height)
			.then(function(response_and_data) {
				return response_and_data.data;
			});
	}


	/**
	 * Get transactions from a block information
	 * Returns all transactions information for a given block height
	 * @param {Number} height Block height
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize The numbers of transactions to return
	 * @param {String} opts.id Id last transaction id to apply pagination
	 * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<Object>} and HTTP response
	 */
	getBlockTransactionsWithHttpInfo(height, opts) {
		opts = opts || {};
		let postBody = null;

		// verify the required parameter 'height' is set
		if (height === undefined || height === null) {
			throw new Error("Missing the required parameter 'height' when calling getBlockTransactions");
		}


		let pathParams = {
			'height': height
		};
		let queryParams = {
			'pageSize': opts['pageSize'],
			'id': opts['id']
		};
		let headerParams = {};
		let formParams = {};

		let authNames = [];
		let contentTypes = [];
		let accepts = ['application/json'];
		let returnType = [Object];

		return this.apiClient.callApi(
			'/block/{height}/transactions', 'GET',
			pathParams, queryParams, headerParams, formParams, postBody,
			authNames, contentTypes, accepts, returnType
		);
	}

	/**
	 * Get transactions from a block information
	 * Returns all transactions information for a given block height
	 * @param {Number} height Block height
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize The numbers of transactions to return
	 * @param {String} opts.id Id last transaction id to apply pagination
	 * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<Object>}
	 */
	getBlockTransactions(height, opts) {
		return this.getBlockTransactionsWithHttpInfo(height, opts)
			.then(function(response_and_data) {
				return response_and_data.data;
			});
	}


	/**
	 * Get the current height of the chain
	 * Returns the current height of the blockchain
	 * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/HeightDTO} and HTTP response
	 */
	getBlockchainHeightWithHttpInfo() {
		let postBody = null;


		let pathParams = {};
		let queryParams = {};
		let headerParams = {};
		let formParams = {};

		let authNames = [];
		let contentTypes = [];
		let accepts = ['application/json'];
		let returnType = HeightDTO;

		return this.apiClient.callApi(
			'/chain/height', 'GET',
			pathParams, queryParams, headerParams, formParams, postBody,
			authNames, contentTypes, accepts, returnType
		);
	}

	/**
	 * Get the current height of the chain
	 * Returns the current height of the blockchain
	 * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/HeightDTO}
	 */
	getBlockchainHeight() {
		return this.getBlockchainHeightWithHttpInfo()
			.then(function(response_and_data) {
				return response_and_data.data;
			});
	}


	/**
	 * Get the current score of the chain
	 * Returns the current chain score
	 * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BlockchainScoreDTO} and HTTP response
	 */
	getBlockchainScoreWithHttpInfo() {
		let postBody = null;


		let pathParams = {};
		let queryParams = {};
		let headerParams = {};
		let formParams = {};

		let authNames = [];
		let contentTypes = [];
		let accepts = ['application/json'];
		let returnType = BlockchainScoreDTO;

		return this.apiClient.callApi(
			'/chain/score', 'GET',
			pathParams, queryParams, headerParams, formParams, postBody,
			authNames, contentTypes, accepts, returnType
		);
	}

	/**
	 * Get the current score of the chain
	 * Returns the current chain score
	 * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BlockchainScoreDTO}
	 */
	getBlockchainScore() {
		return this.getBlockchainScoreWithHttpInfo()
			.then(function(response_and_data) {
				return response_and_data.data;
			});
	}


	/**
	 * Get blocks information
	 * Returns blocks information for a given block height and limit
	 * @param {Number} height The block height at which information should be returned
	 * @param {Number} limit Block limit
	 * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/BlockInfoDTO>} and HTTP response
	 */
	getBlocksByHeightWithLimitWithHttpInfo(height, limit) {
		let postBody = null;

		// verify the required parameter 'height' is set
		if (height === undefined || height === null) {
			throw new Error("Missing the required parameter 'height' when calling getBlocksByHeightWithLimit");
		}

		// verify the required parameter 'limit' is set
		if (limit === undefined || limit === null) {
			throw new Error("Missing the required parameter 'limit' when calling getBlocksByHeightWithLimit");
		}


		let pathParams = {
			'height': height,
			'limit': limit
		};
		let queryParams = {};
		let headerParams = {};
		let formParams = {};

		let authNames = [];
		let contentTypes = [];
		let accepts = ['application/json'];
		let returnType = [BlockInfoDTO];

		return this.apiClient.callApi(
			'/blocks/{height}/limit/{limit}', 'GET',
			pathParams, queryParams, headerParams, formParams, postBody,
			authNames, contentTypes, accepts, returnType
		);
	}

	/**
	 * Get blocks information
	 * Returns blocks information for a given block height and limit
	 * @param {Number} height The block height at which information should be returned
	 * @param {Number} limit Block limit
	 * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/BlockInfoDTO>}
	 */
	getBlocksByHeightWithLimit(height, limit) {
		return this.getBlocksByHeightWithLimitWithHttpInfo(height, limit)
			.then(function(response_and_data) {
				return response_and_data.data;
			});
	}


	/**
	 * Get the storage information
	 * Returns statistical information about the blockchain
	 * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BlockchainStorageInfoDTO} and HTTP response
	 */
	getDiagnosticStorageWithHttpInfo() {
		let postBody = null;


		let pathParams = {};
		let queryParams = {};
		let headerParams = {};
		let formParams = {};

		let authNames = [];
		let contentTypes = [];
		let accepts = ['application/json'];
		let returnType = BlockchainStorageInfoDTO;

		return this.apiClient.callApi(
			'/diagnostic/storage', 'GET',
			pathParams, queryParams, headerParams, formParams, postBody,
			authNames, contentTypes, accepts, returnType
		);
	}

	/**
	 * Get the storage information
	 * Returns statistical information about the blockchain
	 * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BlockchainStorageInfoDTO}
	 */
	getDiagnosticStorage() {
		return this.getDiagnosticStorageWithHttpInfo()
			.then(function(response_and_data) {
				return response_and_data.data;
			});
	}


}

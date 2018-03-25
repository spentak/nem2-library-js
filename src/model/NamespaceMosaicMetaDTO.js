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


import ApiClient from '../ApiClient';


/**
* The NamespaceMosaicMetaDTO model module.
* @module model/NamespaceMosaicMetaDTO
* @version 1.0.0
*/
export default class NamespaceMosaicMetaDTO {
	/**
	 * Constructs a new <code>NamespaceMosaicMetaDTO</code>.
	 * @alias module:model/NamespaceMosaicMetaDTO
	 * @class
	 * @param active {Boolean}
	 * @param index {Number}
	 * @param id {String}
	 */

	constructor(active, index, id) {


		this['active'] = active;this['index'] = index;this['id'] = id;


	}

	/**
	 * Constructs a <code>NamespaceMosaicMetaDTO</code> from a plain JavaScript object, optionally creating a new instance.
	 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
	 * @param {Object} data The plain JavaScript object bearing properties of interest.
	 * @param {module:model/NamespaceMosaicMetaDTO} obj Optional instance to populate.
	 * @return {module:model/NamespaceMosaicMetaDTO} The populated <code>NamespaceMosaicMetaDTO</code> instance.
	 */
	static constructFromObject(data, obj) {
		if (data) {
			obj = obj || new NamespaceMosaicMetaDTO();


			if (data.hasOwnProperty('active')) {
				obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
			}
			if (data.hasOwnProperty('index')) {
				obj['index'] = ApiClient.convertToType(data['index'], 'Number');
			}
			if (data.hasOwnProperty('id')) {
				obj['id'] = ApiClient.convertToType(data['id'], 'String');
			}
		}
		return obj;
	}

	/**
	 * @member {Boolean} active
	 */
	active = undefined;
	/**
	 * @member {Number} index
	 */
	index = undefined;
	/**
	 * @member {String} id
	 */
	id = undefined;


}



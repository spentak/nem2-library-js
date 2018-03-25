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
import MultisigAccountInfoDTO from './MultisigAccountInfoDTO';


/**
* The MultisigAccountGraphInfoDTO model module.
* @module model/MultisigAccountGraphInfoDTO
* @version 1.0.0
*/
export default class MultisigAccountGraphInfoDTO {
	/**
	 * Constructs a new <code>MultisigAccountGraphInfoDTO</code>.
	 * @alias module:model/MultisigAccountGraphInfoDTO
	 * @class
	 * @param level {Number}
	 * @param multisigEntries {Array.<module:model/MultisigAccountInfoDTO>}
	 */

	constructor(level, multisigEntries) {


		this['level'] = level;this['multisigEntries'] = multisigEntries;


	}

	/**
	 * Constructs a <code>MultisigAccountGraphInfoDTO</code> from a plain JavaScript object, optionally creating a new instance.
	 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
	 * @param {Object} data The plain JavaScript object bearing properties of interest.
	 * @param {module:model/MultisigAccountGraphInfoDTO} obj Optional instance to populate.
	 * @return {module:model/MultisigAccountGraphInfoDTO} The populated <code>MultisigAccountGraphInfoDTO</code> instance.
	 */
	static constructFromObject(data, obj) {
		if (data) {
			obj = obj || new MultisigAccountGraphInfoDTO();


			if (data.hasOwnProperty('level')) {
				obj['level'] = ApiClient.convertToType(data['level'], 'Number');
			}
			if (data.hasOwnProperty('multisigEntries')) {
				obj['multisigEntries'] = ApiClient.convertToType(data['multisigEntries'], [MultisigAccountInfoDTO]);
			}
		}
		return obj;
	}

	/**
	 * @member {Number} level
	 */
	level = undefined;
	/**
	 * @member {Array.<module:model/MultisigAccountInfoDTO>} multisigEntries
	 */
	multisigEntries = undefined;


}


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

import expect from 'expect.js';
import MosaicCreationTransaction from '../../src/transactions/MosaicCreationTransaction';
import deadline from '../../src/transactions/Deadline';
import { mosaicId, namespaceId } from '../../src/transactions/NamespaceMosaicId';
import uint64 from "../../src/coders/uint64";

describe('MosaicCreationTransaction', () => {
	const keyPair = {
		publicKey: '9a49366406aca952b88badf5f1e9be6ce4968141035a60be503273ea65456b24',
		privateKey: '041e2ce90c31cd65620ed16ab7a5a485e5b335d7e61c75cd9b3a2fed3e091728'
	};

	it('should create mosaic definition creation transaction', () => {
		const mosaicCreationTransaction = {
			deadline: deadline(),
			duration: uint64.fromUint(10000),
			divisibility: 4,
			parentId: namespaceId('sname'),
			mosaicId: mosaicId('sname','mosaics'),
			mosaicName: 'mosaics'
		};

		const verifiableTransaction = new MosaicCreationTransaction.Builder()
			.addDeadline(mosaicCreationTransaction.deadline)
			.addSupplyMutable()
			.addDivisibility(mosaicCreationTransaction.divisibility)
			.addDuration(mosaicCreationTransaction.duration)
			.addParentId(mosaicCreationTransaction.parentId)
			.addMosaicId(mosaicCreationTransaction.mosaicId)
			.addMosaicName(mosaicCreationTransaction.mosaicName)
			.build();

		const transactionPayload = verifiableTransaction.signTransaction(keyPair);
		expect(transactionPayload.payload.substring(240, transactionPayload.payload.length))
			.to.be.equal('9B8A161CF5092390159911AEA72EBD3C070101046D6F7361696373021027000000000000');
	});
});


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

import { expect } from 'chai';
import CONF from '../conf/conf';

const { LockRoutesApi } = require('../../src/index');

describe('LockRoutesApi', () => {
    let lockRoutesApi;
    const accountAddress = 'SDRDGFTDLLCB67D4HPGIMIHPNSRYRJRT7DOBGWZY';

    const checkFundsLockInfo = fundsLockInfo => {
        /* eslint-disable no-unused-expressions */

        expect(fundsLockInfo.lock.account).to.not.be.undefined;
        expect(fundsLockInfo.lock.accountAddress).to.not.be.undefined;
        expect(fundsLockInfo.lock.mosaicId).to.not.be.undefined;
        expect(fundsLockInfo.lock.amount).to.not.be.undefined;
        expect(fundsLockInfo.lock.height).to.not.be.undefined;
        expect(fundsLockInfo.lock.status).to.not.be.undefined;
        expect(fundsLockInfo.lock.hash).to.not.be.undefined;
        /* eslint-enable */
    };

    const checkSecretLockInfo = secretLockInfo => {
        /* eslint-disable no-unused-expressions */

        expect(secretLockInfo.lock.account).to.not.be.undefined;
        expect(secretLockInfo.lock.accountAddress).to.not.be.undefined;
        expect(secretLockInfo.lock.mosaicId).to.not.be.undefined;
        expect(secretLockInfo.lock.amount).to.not.be.undefined;
        expect(secretLockInfo.lock.height).to.not.be.undefined;
        expect(secretLockInfo.lock.status).to.not.be.undefined;
        expect(secretLockInfo.lock.hashAlgorithm).to.not.be.undefined;
        expect(secretLockInfo.lock.secret).to.not.be.undefined;
        expect(secretLockInfo.lock.blockTransactionsHash).to.not.be.undefined;
        /* eslint-enable */
    };

    beforeEach(() => {
        lockRoutesApi = new LockRoutesApi(CONF.SERVER);
    });

    describe('getFundsLock', () => {
        it('should call getFundsLock successfully', () => {
            return lockRoutesApi.getFundsLock("ADF6E45D8C21BC3B835A2C3ABAC90800A270601F0B1361BC46C26E00968105E6")
                .then(fundsLock => {
                checkFundsLockInfo(fundsLock);
            });
        });
    });

    describe('getSecretLock', () => {
        it('should call getFundsLock successfully', () => {
            return lockRoutesApi.getSecretLock("E70D37DA074D5F2CEF6BCE7E3E06D3D7E42E5A653EDDE49EDEB0628C295883" +
                "CE6685494FE64B835762BB2D5959AE48F87501E7DB3B826B4C1BA9D3BA70BC5DC5").then(secretLock => {
                checkSecretLockInfo(secretLock);
            });
        });
    });

    describe('getFundsLock', () => {
        it('should call getFundsLock successfully', () => {
            return lockRoutesApi.getFundsLocksInfoFromAccount(accountAddress).then(fundsLocksInfo => {
                checkFundsLockInfo(fundsLocksInfo[0]);
            });
        });
    });

    describe('getSecretLock', () => {
        it('should call getFundsLock successfully', () => {
            return lockRoutesApi.getSecretLocksInfoFromAccount(accountAddress).then(secretLocksInfo => {
                checkSecretLockInfo(secretLocksInfo[0]);
            });
        });
    });

});

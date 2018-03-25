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

// automatically generated by the FlatBuffers compiler, do not modify

/**
 * @const
 * @namespace
 */
var Catapult = Catapult || {};

/**
 * @const
 * @namespace
 */
Catapult.Buffers = Catapult.Buffers || {};

/**
 * @constructor
 */
Catapult.Buffers.HashLockTransactionBuffer = function() {
	/**
	 * @type {flatbuffers.ByteBuffer}
	 */
	this.bb = null;

	/**
	 * @type {number}
	 */
	this.bb_pos = 0;
};

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {Catapult.Buffers.HashLockTransactionBuffer}
 */
Catapult.Buffers.HashLockTransactionBuffer.prototype.__init = function(i, bb) {
	this.bb_pos = i;
	this.bb = bb;
	return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {Catapult.Buffers.HashLockTransactionBuffer=} obj
 * @returns {Catapult.Buffers.HashLockTransactionBuffer}
 */
Catapult.Buffers.HashLockTransactionBuffer.getRootAsHashLockTransactionBuffer = function(bb, obj) {
	return (obj || new Catapult.Buffers.HashLockTransactionBuffer).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @returns {number}
 */
Catapult.Buffers.HashLockTransactionBuffer.prototype.size = function() {
	var offset = this.bb.__offset(this.bb_pos, 4);
	return offset ? this.bb.readUint32(this.bb_pos + offset) : 0;
};

/**
 * @param {number} index
 * @returns {number}
 */
Catapult.Buffers.HashLockTransactionBuffer.prototype.signature = function(index) {
	var offset = this.bb.__offset(this.bb_pos, 6);
	return offset ? this.bb.readUint8(this.bb.__vector(this.bb_pos + offset) + index) : 0;
};

/**
 * @returns {number}
 */
Catapult.Buffers.HashLockTransactionBuffer.prototype.signatureLength = function() {
	var offset = this.bb.__offset(this.bb_pos, 6);
	return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @returns {Uint8Array}
 */
Catapult.Buffers.HashLockTransactionBuffer.prototype.signatureArray = function() {
	var offset = this.bb.__offset(this.bb_pos, 6);
	return offset ? new Uint8Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + offset), this.bb.__vector_len(this.bb_pos + offset)) : null;
};

/**
 * @param {number} index
 * @returns {number}
 */
Catapult.Buffers.HashLockTransactionBuffer.prototype.signer = function(index) {
	var offset = this.bb.__offset(this.bb_pos, 8);
	return offset ? this.bb.readUint8(this.bb.__vector(this.bb_pos + offset) + index) : 0;
};

/**
 * @returns {number}
 */
Catapult.Buffers.HashLockTransactionBuffer.prototype.signerLength = function() {
	var offset = this.bb.__offset(this.bb_pos, 8);
	return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @returns {Uint8Array}
 */
Catapult.Buffers.HashLockTransactionBuffer.prototype.signerArray = function() {
	var offset = this.bb.__offset(this.bb_pos, 8);
	return offset ? new Uint8Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + offset), this.bb.__vector_len(this.bb_pos + offset)) : null;
};

/**
 * @returns {number}
 */
Catapult.Buffers.HashLockTransactionBuffer.prototype.version = function() {
	var offset = this.bb.__offset(this.bb_pos, 10);
	return offset ? this.bb.readUint16(this.bb_pos + offset) : 0;
};

/**
 * @returns {number}
 */
Catapult.Buffers.HashLockTransactionBuffer.prototype.type = function() {
	var offset = this.bb.__offset(this.bb_pos, 12);
	return offset ? this.bb.readUint16(this.bb_pos + offset) : 0;
};

/**
 * @param {number} index
 * @returns {number}
 */
Catapult.Buffers.HashLockTransactionBuffer.prototype.fee = function(index) {
	var offset = this.bb.__offset(this.bb_pos, 14);
	return offset ? this.bb.readUint32(this.bb.__vector(this.bb_pos + offset) + index * 4) : 0;
};

/**
 * @returns {number}
 */
Catapult.Buffers.HashLockTransactionBuffer.prototype.feeLength = function() {
	var offset = this.bb.__offset(this.bb_pos, 14);
	return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @returns {Uint32Array}
 */
Catapult.Buffers.HashLockTransactionBuffer.prototype.feeArray = function() {
	var offset = this.bb.__offset(this.bb_pos, 14);
	return offset ? new Uint32Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + offset), this.bb.__vector_len(this.bb_pos + offset)) : null;
};

/**
 * @param {number} index
 * @returns {number}
 */
Catapult.Buffers.HashLockTransactionBuffer.prototype.deadline = function(index) {
	var offset = this.bb.__offset(this.bb_pos, 16);
	return offset ? this.bb.readUint32(this.bb.__vector(this.bb_pos + offset) + index * 4) : 0;
};

/**
 * @returns {number}
 */
Catapult.Buffers.HashLockTransactionBuffer.prototype.deadlineLength = function() {
	var offset = this.bb.__offset(this.bb_pos, 16);
	return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @returns {Uint32Array}
 */
Catapult.Buffers.HashLockTransactionBuffer.prototype.deadlineArray = function() {
	var offset = this.bb.__offset(this.bb_pos, 16);
	return offset ? new Uint32Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + offset), this.bb.__vector_len(this.bb_pos + offset)) : null;
};

/**
 * @param {number} index
 * @returns {number}
 */
Catapult.Buffers.HashLockTransactionBuffer.prototype.mosaicId = function(index) {
	var offset = this.bb.__offset(this.bb_pos, 18);
	return offset ? this.bb.readUint32(this.bb.__vector(this.bb_pos + offset) + index * 4) : 0;
};

/**
 * @returns {number}
 */
Catapult.Buffers.HashLockTransactionBuffer.prototype.mosaicIdLength = function() {
	var offset = this.bb.__offset(this.bb_pos, 18);
	return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @returns {Uint32Array}
 */
Catapult.Buffers.HashLockTransactionBuffer.prototype.mosaicIdArray = function() {
	var offset = this.bb.__offset(this.bb_pos, 18);
	return offset ? new Uint32Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + offset), this.bb.__vector_len(this.bb_pos + offset)) : null;
};

/**
 * @param {number} index
 * @returns {number}
 */
Catapult.Buffers.HashLockTransactionBuffer.prototype.mosaicAmount = function(index) {
	var offset = this.bb.__offset(this.bb_pos, 20);
	return offset ? this.bb.readUint32(this.bb.__vector(this.bb_pos + offset) + index * 4) : 0;
};

/**
 * @returns {number}
 */
Catapult.Buffers.HashLockTransactionBuffer.prototype.mosaicAmountLength = function() {
	var offset = this.bb.__offset(this.bb_pos, 20);
	return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @returns {Uint32Array}
 */
Catapult.Buffers.HashLockTransactionBuffer.prototype.mosaicAmountArray = function() {
	var offset = this.bb.__offset(this.bb_pos, 20);
	return offset ? new Uint32Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + offset), this.bb.__vector_len(this.bb_pos + offset)) : null;
};

/**
 * @param {number} index
 * @returns {number}
 */
Catapult.Buffers.HashLockTransactionBuffer.prototype.duration = function(index) {
	var offset = this.bb.__offset(this.bb_pos, 22);
	return offset ? this.bb.readUint32(this.bb.__vector(this.bb_pos + offset) + index * 4) : 0;
};

/**
 * @returns {number}
 */
Catapult.Buffers.HashLockTransactionBuffer.prototype.durationLength = function() {
	var offset = this.bb.__offset(this.bb_pos, 22);
	return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @returns {Uint32Array}
 */
Catapult.Buffers.HashLockTransactionBuffer.prototype.durationArray = function() {
	var offset = this.bb.__offset(this.bb_pos, 22);
	return offset ? new Uint32Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + offset), this.bb.__vector_len(this.bb_pos + offset)) : null;
};

/**
 * @param {number} index
 * @returns {number}
 */
Catapult.Buffers.HashLockTransactionBuffer.prototype.hash = function(index) {
	var offset = this.bb.__offset(this.bb_pos, 24);
	return offset ? this.bb.readUint8(this.bb.__vector(this.bb_pos + offset) + index) : 0;
};

/**
 * @returns {number}
 */
Catapult.Buffers.HashLockTransactionBuffer.prototype.hashLength = function() {
	var offset = this.bb.__offset(this.bb_pos, 24);
	return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @returns {Uint8Array}
 */
Catapult.Buffers.HashLockTransactionBuffer.prototype.hashArray = function() {
	var offset = this.bb.__offset(this.bb_pos, 24);
	return offset ? new Uint8Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + offset), this.bb.__vector_len(this.bb_pos + offset)) : null;
};

/**
 * @param {flatbuffers.Builder} builder
 */
Catapult.Buffers.HashLockTransactionBuffer.startHashLockTransactionBuffer = function(builder) {
	builder.startObject(11);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} size
 */
Catapult.Buffers.HashLockTransactionBuffer.addSize = function(builder, size) {
	builder.addFieldInt32(0, size, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} signatureOffset
 */
Catapult.Buffers.HashLockTransactionBuffer.addSignature = function(builder, signatureOffset) {
	builder.addFieldOffset(1, signatureOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {Array.<number>} data
 * @returns {flatbuffers.Offset}
 */
Catapult.Buffers.HashLockTransactionBuffer.createSignatureVector = function(builder, data) {
	builder.startVector(1, data.length, 1);
	for (var i = data.length - 1; i >= 0; i--) {
		builder.addInt8(data[i]);
	}
	return builder.endVector();
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} numElems
 */
Catapult.Buffers.HashLockTransactionBuffer.startSignatureVector = function(builder, numElems) {
	builder.startVector(1, numElems, 1);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} signerOffset
 */
Catapult.Buffers.HashLockTransactionBuffer.addSigner = function(builder, signerOffset) {
	builder.addFieldOffset(2, signerOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {Array.<number>} data
 * @returns {flatbuffers.Offset}
 */
Catapult.Buffers.HashLockTransactionBuffer.createSignerVector = function(builder, data) {
	builder.startVector(1, data.length, 1);
	for (var i = data.length - 1; i >= 0; i--) {
		builder.addInt8(data[i]);
	}
	return builder.endVector();
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} numElems
 */
Catapult.Buffers.HashLockTransactionBuffer.startSignerVector = function(builder, numElems) {
	builder.startVector(1, numElems, 1);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} version
 */
Catapult.Buffers.HashLockTransactionBuffer.addVersion = function(builder, version) {
	builder.addFieldInt16(3, version, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} type
 */
Catapult.Buffers.HashLockTransactionBuffer.addType = function(builder, type) {
	builder.addFieldInt16(4, type, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} feeOffset
 */
Catapult.Buffers.HashLockTransactionBuffer.addFee = function(builder, feeOffset) {
	builder.addFieldOffset(5, feeOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {Array.<number>} data
 * @returns {flatbuffers.Offset}
 */
Catapult.Buffers.HashLockTransactionBuffer.createFeeVector = function(builder, data) {
	builder.startVector(4, data.length, 4);
	for (var i = data.length - 1; i >= 0; i--) {
		builder.addInt32(data[i]);
	}
	return builder.endVector();
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} numElems
 */
Catapult.Buffers.HashLockTransactionBuffer.startFeeVector = function(builder, numElems) {
	builder.startVector(4, numElems, 4);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} deadlineOffset
 */
Catapult.Buffers.HashLockTransactionBuffer.addDeadline = function(builder, deadlineOffset) {
	builder.addFieldOffset(6, deadlineOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {Array.<number>} data
 * @returns {flatbuffers.Offset}
 */
Catapult.Buffers.HashLockTransactionBuffer.createDeadlineVector = function(builder, data) {
	builder.startVector(4, data.length, 4);
	for (var i = data.length - 1; i >= 0; i--) {
		builder.addInt32(data[i]);
	}
	return builder.endVector();
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} numElems
 */
Catapult.Buffers.HashLockTransactionBuffer.startDeadlineVector = function(builder, numElems) {
	builder.startVector(4, numElems, 4);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} mosaicIdOffset
 */
Catapult.Buffers.HashLockTransactionBuffer.addMosaicId = function(builder, mosaicIdOffset) {
	builder.addFieldOffset(7, mosaicIdOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {Array.<number>} data
 * @returns {flatbuffers.Offset}
 */
Catapult.Buffers.HashLockTransactionBuffer.createMosaicIdVector = function(builder, data) {
	builder.startVector(4, data.length, 4);
	for (var i = data.length - 1; i >= 0; i--) {
		builder.addInt32(data[i]);
	}
	return builder.endVector();
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} numElems
 */
Catapult.Buffers.HashLockTransactionBuffer.startMosaicIdVector = function(builder, numElems) {
	builder.startVector(4, numElems, 4);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} mosaicAmountOffset
 */
Catapult.Buffers.HashLockTransactionBuffer.addMosaicAmount = function(builder, mosaicAmountOffset) {
	builder.addFieldOffset(8, mosaicAmountOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {Array.<number>} data
 * @returns {flatbuffers.Offset}
 */
Catapult.Buffers.HashLockTransactionBuffer.createMosaicAmountVector = function(builder, data) {
	builder.startVector(4, data.length, 4);
	for (var i = data.length - 1; i >= 0; i--) {
		builder.addInt32(data[i]);
	}
	return builder.endVector();
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} numElems
 */
Catapult.Buffers.HashLockTransactionBuffer.startMosaicAmountVector = function(builder, numElems) {
	builder.startVector(4, numElems, 4);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} durationOffset
 */
Catapult.Buffers.HashLockTransactionBuffer.addDuration = function(builder, durationOffset) {
	builder.addFieldOffset(9, durationOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {Array.<number>} data
 * @returns {flatbuffers.Offset}
 */
Catapult.Buffers.HashLockTransactionBuffer.createDurationVector = function(builder, data) {
	builder.startVector(4, data.length, 4);
	for (var i = data.length - 1; i >= 0; i--) {
		builder.addInt32(data[i]);
	}
	return builder.endVector();
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} numElems
 */
Catapult.Buffers.HashLockTransactionBuffer.startDurationVector = function(builder, numElems) {
	builder.startVector(4, numElems, 4);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} hashOffset
 */
Catapult.Buffers.HashLockTransactionBuffer.addHash = function(builder, hashOffset) {
	builder.addFieldOffset(10, hashOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {Array.<number>} data
 * @returns {flatbuffers.Offset}
 */
Catapult.Buffers.HashLockTransactionBuffer.createHashVector = function(builder, data) {
	builder.startVector(1, data.length, 1);
	for (var i = data.length - 1; i >= 0; i--) {
		builder.addInt8(data[i]);
	}
	return builder.endVector();
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} numElems
 */
Catapult.Buffers.HashLockTransactionBuffer.startHashVector = function(builder, numElems) {
	builder.startVector(1, numElems, 1);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
Catapult.Buffers.HashLockTransactionBuffer.endHashLockTransactionBuffer = function(builder) {
	var offset = builder.endObject();
	return offset;
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} offset
 */
Catapult.Buffers.HashLockTransactionBuffer.finishHashLockTransactionBufferBuffer = function(builder, offset) {
	builder.finish(offset);
};

// Exports for Node.js and RequireJS
export default Catapult;
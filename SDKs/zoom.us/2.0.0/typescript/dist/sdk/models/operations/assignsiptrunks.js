"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssignSipTrunksResponse = exports.AssignSipTrunksRequest = exports.AssignSipTrunks201ApplicationJson = exports.AssignSipTrunks201ApplicationJsonSipTrunks = exports.AssignSipTrunksRequests = exports.AssignSipTrunksMultipartFormData1 = exports.AssignSipTrunksMultipartFormDataSipTrunks = exports.AssignSipTrunksApplicationJson = exports.AssignSipTrunksApplicationJsonSipTrunks = exports.AssignSipTrunksPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var AssignSipTrunksPathParams = /** @class */ (function (_super) {
    __extends(AssignSipTrunksPathParams, _super);
    function AssignSipTrunksPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], AssignSipTrunksPathParams.prototype, "accountId", void 0);
    return AssignSipTrunksPathParams;
}(utils_1.SpeakeasyBase));
exports.AssignSipTrunksPathParams = AssignSipTrunksPathParams;
var AssignSipTrunksApplicationJsonSipTrunks = /** @class */ (function (_super) {
    __extends(AssignSipTrunksApplicationJsonSipTrunks, _super);
    function AssignSipTrunksApplicationJsonSipTrunks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dnis" }),
        __metadata("design:type", String)
    ], AssignSipTrunksApplicationJsonSipTrunks.prototype, "dnis", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], AssignSipTrunksApplicationJsonSipTrunks.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=outbound_caller_id" }),
        __metadata("design:type", String)
    ], AssignSipTrunksApplicationJsonSipTrunks.prototype, "outboundCallerId", void 0);
    return AssignSipTrunksApplicationJsonSipTrunks;
}(utils_1.SpeakeasyBase));
exports.AssignSipTrunksApplicationJsonSipTrunks = AssignSipTrunksApplicationJsonSipTrunks;
var AssignSipTrunksApplicationJson = /** @class */ (function (_super) {
    __extends(AssignSipTrunksApplicationJson, _super);
    function AssignSipTrunksApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sip_trunks", elemType: AssignSipTrunksApplicationJsonSipTrunks }),
        __metadata("design:type", Array)
    ], AssignSipTrunksApplicationJson.prototype, "sipTrunks", void 0);
    return AssignSipTrunksApplicationJson;
}(utils_1.SpeakeasyBase));
exports.AssignSipTrunksApplicationJson = AssignSipTrunksApplicationJson;
var AssignSipTrunksMultipartFormDataSipTrunks = /** @class */ (function (_super) {
    __extends(AssignSipTrunksMultipartFormDataSipTrunks, _super);
    function AssignSipTrunksMultipartFormDataSipTrunks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dnis" }),
        __metadata("design:type", String)
    ], AssignSipTrunksMultipartFormDataSipTrunks.prototype, "dnis", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], AssignSipTrunksMultipartFormDataSipTrunks.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=outbound_caller_id" }),
        __metadata("design:type", String)
    ], AssignSipTrunksMultipartFormDataSipTrunks.prototype, "outboundCallerId", void 0);
    return AssignSipTrunksMultipartFormDataSipTrunks;
}(utils_1.SpeakeasyBase));
exports.AssignSipTrunksMultipartFormDataSipTrunks = AssignSipTrunksMultipartFormDataSipTrunks;
var AssignSipTrunksMultipartFormData1 = /** @class */ (function (_super) {
    __extends(AssignSipTrunksMultipartFormData1, _super);
    function AssignSipTrunksMultipartFormData1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=sip_trunks;json=true", elemType: AssignSipTrunksMultipartFormDataSipTrunks }),
        __metadata("design:type", Array)
    ], AssignSipTrunksMultipartFormData1.prototype, "sipTrunks", void 0);
    return AssignSipTrunksMultipartFormData1;
}(utils_1.SpeakeasyBase));
exports.AssignSipTrunksMultipartFormData1 = AssignSipTrunksMultipartFormData1;
var AssignSipTrunksRequests = /** @class */ (function (_super) {
    __extends(AssignSipTrunksRequests, _super);
    function AssignSipTrunksRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", AssignSipTrunksApplicationJson)
    ], AssignSipTrunksRequests.prototype, "object", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", AssignSipTrunksMultipartFormData1)
    ], AssignSipTrunksRequests.prototype, "object1", void 0);
    return AssignSipTrunksRequests;
}(utils_1.SpeakeasyBase));
exports.AssignSipTrunksRequests = AssignSipTrunksRequests;
var AssignSipTrunks201ApplicationJsonSipTrunks = /** @class */ (function (_super) {
    __extends(AssignSipTrunks201ApplicationJsonSipTrunks, _super);
    function AssignSipTrunks201ApplicationJsonSipTrunks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dnis" }),
        __metadata("design:type", String)
    ], AssignSipTrunks201ApplicationJsonSipTrunks.prototype, "dnis", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], AssignSipTrunks201ApplicationJsonSipTrunks.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], AssignSipTrunks201ApplicationJsonSipTrunks.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=number_prefix" }),
        __metadata("design:type", String)
    ], AssignSipTrunks201ApplicationJsonSipTrunks.prototype, "numberPrefix", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sip_server_address" }),
        __metadata("design:type", String)
    ], AssignSipTrunks201ApplicationJsonSipTrunks.prototype, "sipServerAddress", void 0);
    return AssignSipTrunks201ApplicationJsonSipTrunks;
}(utils_1.SpeakeasyBase));
exports.AssignSipTrunks201ApplicationJsonSipTrunks = AssignSipTrunks201ApplicationJsonSipTrunks;
var AssignSipTrunks201ApplicationJson = /** @class */ (function (_super) {
    __extends(AssignSipTrunks201ApplicationJson, _super);
    function AssignSipTrunks201ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sip_trunks", elemType: AssignSipTrunks201ApplicationJsonSipTrunks }),
        __metadata("design:type", Array)
    ], AssignSipTrunks201ApplicationJson.prototype, "sipTrunks", void 0);
    return AssignSipTrunks201ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.AssignSipTrunks201ApplicationJson = AssignSipTrunks201ApplicationJson;
var AssignSipTrunksRequest = /** @class */ (function (_super) {
    __extends(AssignSipTrunksRequest, _super);
    function AssignSipTrunksRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AssignSipTrunksPathParams)
    ], AssignSipTrunksRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AssignSipTrunksRequests)
    ], AssignSipTrunksRequest.prototype, "request", void 0);
    return AssignSipTrunksRequest;
}(utils_1.SpeakeasyBase));
exports.AssignSipTrunksRequest = AssignSipTrunksRequest;
var AssignSipTrunksResponse = /** @class */ (function (_super) {
    __extends(AssignSipTrunksResponse, _super);
    function AssignSipTrunksResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], AssignSipTrunksResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AssignSipTrunksResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], AssignSipTrunksResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AssignSipTrunks201ApplicationJson)
    ], AssignSipTrunksResponse.prototype, "assignSIPTrunks201ApplicationJSONObject", void 0);
    return AssignSipTrunksResponse;
}(utils_1.SpeakeasyBase));
exports.AssignSipTrunksResponse = AssignSipTrunksResponse;

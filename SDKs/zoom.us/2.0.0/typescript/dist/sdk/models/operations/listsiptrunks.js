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
exports.ListSipTrunksResponse = exports.ListSipTrunksRequest = exports.ListSipTrunks200ApplicationJson = exports.ListSipTrunks200ApplicationJsonSipTrunks = exports.ListSipTrunksPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var ListSipTrunksPathParams = /** @class */ (function (_super) {
    __extends(ListSipTrunksPathParams, _super);
    function ListSipTrunksPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], ListSipTrunksPathParams.prototype, "accountId", void 0);
    return ListSipTrunksPathParams;
}(utils_1.SpeakeasyBase));
exports.ListSipTrunksPathParams = ListSipTrunksPathParams;
var ListSipTrunks200ApplicationJsonSipTrunks = /** @class */ (function (_super) {
    __extends(ListSipTrunks200ApplicationJsonSipTrunks, _super);
    function ListSipTrunks200ApplicationJsonSipTrunks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dnis" }),
        __metadata("design:type", String)
    ], ListSipTrunks200ApplicationJsonSipTrunks.prototype, "dnis", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ListSipTrunks200ApplicationJsonSipTrunks.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ListSipTrunks200ApplicationJsonSipTrunks.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=number_prefix" }),
        __metadata("design:type", String)
    ], ListSipTrunks200ApplicationJsonSipTrunks.prototype, "numberPrefix", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=outbound_caller_id" }),
        __metadata("design:type", String)
    ], ListSipTrunks200ApplicationJsonSipTrunks.prototype, "outboundCallerId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sip_server_address" }),
        __metadata("design:type", String)
    ], ListSipTrunks200ApplicationJsonSipTrunks.prototype, "sipServerAddress", void 0);
    return ListSipTrunks200ApplicationJsonSipTrunks;
}(utils_1.SpeakeasyBase));
exports.ListSipTrunks200ApplicationJsonSipTrunks = ListSipTrunks200ApplicationJsonSipTrunks;
var ListSipTrunks200ApplicationJson = /** @class */ (function (_super) {
    __extends(ListSipTrunks200ApplicationJson, _super);
    function ListSipTrunks200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sip_trunks", elemType: ListSipTrunks200ApplicationJsonSipTrunks }),
        __metadata("design:type", Array)
    ], ListSipTrunks200ApplicationJson.prototype, "sipTrunks", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total_records" }),
        __metadata("design:type", Number)
    ], ListSipTrunks200ApplicationJson.prototype, "totalRecords", void 0);
    return ListSipTrunks200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListSipTrunks200ApplicationJson = ListSipTrunks200ApplicationJson;
var ListSipTrunksRequest = /** @class */ (function (_super) {
    __extends(ListSipTrunksRequest, _super);
    function ListSipTrunksRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListSipTrunksPathParams)
    ], ListSipTrunksRequest.prototype, "pathParams", void 0);
    return ListSipTrunksRequest;
}(utils_1.SpeakeasyBase));
exports.ListSipTrunksRequest = ListSipTrunksRequest;
var ListSipTrunksResponse = /** @class */ (function (_super) {
    __extends(ListSipTrunksResponse, _super);
    function ListSipTrunksResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], ListSipTrunksResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListSipTrunksResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListSipTrunksResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListSipTrunks200ApplicationJson)
    ], ListSipTrunksResponse.prototype, "listSIPTrunks200ApplicationJSONObject", void 0);
    return ListSipTrunksResponse;
}(utils_1.SpeakeasyBase));
exports.ListSipTrunksResponse = ListSipTrunksResponse;

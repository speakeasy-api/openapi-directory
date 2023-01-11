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
exports.DeleteCustomObjectRecordByIdResponse = exports.DeleteCustomObjectRecordByIdRequest = exports.DeleteCustomObjectRecordByIdHeaders = exports.DeleteCustomObjectRecordByIdPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var DeleteCustomObjectRecordByIdPathParams = /** @class */ (function (_super) {
    __extends(DeleteCustomObjectRecordByIdPathParams, _super);
    function DeleteCustomObjectRecordByIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], DeleteCustomObjectRecordByIdPathParams.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=object" }),
        __metadata("design:type", String)
    ], DeleteCustomObjectRecordByIdPathParams.prototype, "object", void 0);
    return DeleteCustomObjectRecordByIdPathParams;
}(utils_1.SpeakeasyBase));
exports.DeleteCustomObjectRecordByIdPathParams = DeleteCustomObjectRecordByIdPathParams;
var DeleteCustomObjectRecordByIdHeaders = /** @class */ (function (_super) {
    __extends(DeleteCustomObjectRecordByIdHeaders, _super);
    function DeleteCustomObjectRecordByIdHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], DeleteCustomObjectRecordByIdHeaders.prototype, "authorization", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" }),
        __metadata("design:type", String)
    ], DeleteCustomObjectRecordByIdHeaders.prototype, "zuoraEntityIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" }),
        __metadata("design:type", String)
    ], DeleteCustomObjectRecordByIdHeaders.prototype, "zuoraTrackId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Zuora-Version" }),
        __metadata("design:type", Date)
    ], DeleteCustomObjectRecordByIdHeaders.prototype, "zuoraVersion", void 0);
    return DeleteCustomObjectRecordByIdHeaders;
}(utils_1.SpeakeasyBase));
exports.DeleteCustomObjectRecordByIdHeaders = DeleteCustomObjectRecordByIdHeaders;
var DeleteCustomObjectRecordByIdRequest = /** @class */ (function (_super) {
    __extends(DeleteCustomObjectRecordByIdRequest, _super);
    function DeleteCustomObjectRecordByIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeleteCustomObjectRecordByIdPathParams)
    ], DeleteCustomObjectRecordByIdRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeleteCustomObjectRecordByIdHeaders)
    ], DeleteCustomObjectRecordByIdRequest.prototype, "headers", void 0);
    return DeleteCustomObjectRecordByIdRequest;
}(utils_1.SpeakeasyBase));
exports.DeleteCustomObjectRecordByIdRequest = DeleteCustomObjectRecordByIdRequest;
var DeleteCustomObjectRecordByIdResponse = /** @class */ (function (_super) {
    __extends(DeleteCustomObjectRecordByIdResponse, _super);
    function DeleteCustomObjectRecordByIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DeleteCustomObjectRecordByIdResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DeleteCustomObjectRecordByIdResponse.prototype, "deleteCustomObjectRecordByID200ApplicationJSONUriString", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DeleteCustomObjectRecordByIdResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DeleteCustomObjectRecordByIdResponse.prototype, "statusCode", void 0);
    return DeleteCustomObjectRecordByIdResponse;
}(utils_1.SpeakeasyBase));
exports.DeleteCustomObjectRecordByIdResponse = DeleteCustomObjectRecordByIdResponse;

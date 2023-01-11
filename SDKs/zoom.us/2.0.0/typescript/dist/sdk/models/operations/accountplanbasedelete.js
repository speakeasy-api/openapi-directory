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
exports.AccountPlanBaseDeleteResponse = exports.AccountPlanBaseDeleteRequest = exports.AccountPlanBaseDeleteRequests = exports.AccountPlanBaseDeleteMultipartFormData = exports.AccountPlanBaseDeleteApplicationJson = exports.AccountPlanBaseDeletePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var AccountPlanBaseDeletePathParams = /** @class */ (function (_super) {
    __extends(AccountPlanBaseDeletePathParams, _super);
    function AccountPlanBaseDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], AccountPlanBaseDeletePathParams.prototype, "accountId", void 0);
    return AccountPlanBaseDeletePathParams;
}(utils_1.SpeakeasyBase));
exports.AccountPlanBaseDeletePathParams = AccountPlanBaseDeletePathParams;
var AccountPlanBaseDeleteApplicationJson = /** @class */ (function (_super) {
    __extends(AccountPlanBaseDeleteApplicationJson, _super);
    function AccountPlanBaseDeleteApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], AccountPlanBaseDeleteApplicationJson.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=comment" }),
        __metadata("design:type", String)
    ], AccountPlanBaseDeleteApplicationJson.prototype, "comment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=reason" }),
        __metadata("design:type", Number)
    ], AccountPlanBaseDeleteApplicationJson.prototype, "reason", void 0);
    return AccountPlanBaseDeleteApplicationJson;
}(utils_1.SpeakeasyBase));
exports.AccountPlanBaseDeleteApplicationJson = AccountPlanBaseDeleteApplicationJson;
var AccountPlanBaseDeleteMultipartFormData = /** @class */ (function (_super) {
    __extends(AccountPlanBaseDeleteMultipartFormData, _super);
    function AccountPlanBaseDeleteMultipartFormData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=action" }),
        __metadata("design:type", String)
    ], AccountPlanBaseDeleteMultipartFormData.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=comment" }),
        __metadata("design:type", String)
    ], AccountPlanBaseDeleteMultipartFormData.prototype, "comment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=reason" }),
        __metadata("design:type", Number)
    ], AccountPlanBaseDeleteMultipartFormData.prototype, "reason", void 0);
    return AccountPlanBaseDeleteMultipartFormData;
}(utils_1.SpeakeasyBase));
exports.AccountPlanBaseDeleteMultipartFormData = AccountPlanBaseDeleteMultipartFormData;
var AccountPlanBaseDeleteRequests = /** @class */ (function (_super) {
    __extends(AccountPlanBaseDeleteRequests, _super);
    function AccountPlanBaseDeleteRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", AccountPlanBaseDeleteApplicationJson)
    ], AccountPlanBaseDeleteRequests.prototype, "object", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", AccountPlanBaseDeleteMultipartFormData)
    ], AccountPlanBaseDeleteRequests.prototype, "object1", void 0);
    return AccountPlanBaseDeleteRequests;
}(utils_1.SpeakeasyBase));
exports.AccountPlanBaseDeleteRequests = AccountPlanBaseDeleteRequests;
var AccountPlanBaseDeleteRequest = /** @class */ (function (_super) {
    __extends(AccountPlanBaseDeleteRequest, _super);
    function AccountPlanBaseDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AccountPlanBaseDeletePathParams)
    ], AccountPlanBaseDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AccountPlanBaseDeleteRequests)
    ], AccountPlanBaseDeleteRequest.prototype, "request", void 0);
    return AccountPlanBaseDeleteRequest;
}(utils_1.SpeakeasyBase));
exports.AccountPlanBaseDeleteRequest = AccountPlanBaseDeleteRequest;
var AccountPlanBaseDeleteResponse = /** @class */ (function (_super) {
    __extends(AccountPlanBaseDeleteResponse, _super);
    function AccountPlanBaseDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], AccountPlanBaseDeleteResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AccountPlanBaseDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], AccountPlanBaseDeleteResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], AccountPlanBaseDeleteResponse.prototype, "accountPlanBaseDelete204ApplicationJSONObject", void 0);
    return AccountPlanBaseDeleteResponse;
}(utils_1.SpeakeasyBase));
exports.AccountPlanBaseDeleteResponse = AccountPlanBaseDeleteResponse;

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
exports.AccountBillingResponse = exports.AccountBillingRequest = exports.AccountBilling200ApplicationJson = exports.AccountBillingPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var AccountBillingPathParams = /** @class */ (function (_super) {
    __extends(AccountBillingPathParams, _super);
    function AccountBillingPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], AccountBillingPathParams.prototype, "accountId", void 0);
    return AccountBillingPathParams;
}(utils_1.SpeakeasyBase));
exports.AccountBillingPathParams = AccountBillingPathParams;
// AccountBilling200ApplicationJson
/**
 * Billing Contact object.
**/
var AccountBilling200ApplicationJson = /** @class */ (function (_super) {
    __extends(AccountBilling200ApplicationJson, _super);
    function AccountBilling200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=address" }),
        __metadata("design:type", String)
    ], AccountBilling200ApplicationJson.prototype, "address", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=apt" }),
        __metadata("design:type", String)
    ], AccountBilling200ApplicationJson.prototype, "apt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=city" }),
        __metadata("design:type", String)
    ], AccountBilling200ApplicationJson.prototype, "city", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], AccountBilling200ApplicationJson.prototype, "country", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], AccountBilling200ApplicationJson.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first_name" }),
        __metadata("design:type", String)
    ], AccountBilling200ApplicationJson.prototype, "firstName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last_name" }),
        __metadata("design:type", String)
    ], AccountBilling200ApplicationJson.prototype, "lastName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=phone_number" }),
        __metadata("design:type", String)
    ], AccountBilling200ApplicationJson.prototype, "phoneNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], AccountBilling200ApplicationJson.prototype, "state", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=zip" }),
        __metadata("design:type", String)
    ], AccountBilling200ApplicationJson.prototype, "zip", void 0);
    return AccountBilling200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.AccountBilling200ApplicationJson = AccountBilling200ApplicationJson;
var AccountBillingRequest = /** @class */ (function (_super) {
    __extends(AccountBillingRequest, _super);
    function AccountBillingRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AccountBillingPathParams)
    ], AccountBillingRequest.prototype, "pathParams", void 0);
    return AccountBillingRequest;
}(utils_1.SpeakeasyBase));
exports.AccountBillingRequest = AccountBillingRequest;
var AccountBillingResponse = /** @class */ (function (_super) {
    __extends(AccountBillingResponse, _super);
    function AccountBillingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], AccountBillingResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AccountBillingResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], AccountBillingResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AccountBilling200ApplicationJson)
    ], AccountBillingResponse.prototype, "accountBilling200ApplicationJSONObject", void 0);
    return AccountBillingResponse;
}(utils_1.SpeakeasyBase));
exports.AccountBillingResponse = AccountBillingResponse;

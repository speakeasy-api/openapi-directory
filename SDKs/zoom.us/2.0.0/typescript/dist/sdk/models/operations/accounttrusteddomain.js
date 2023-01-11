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
exports.AccountTrustedDomainResponse = exports.AccountTrustedDomainRequest = exports.AccountTrustedDomainPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var AccountTrustedDomainPathParams = /** @class */ (function (_super) {
    __extends(AccountTrustedDomainPathParams, _super);
    function AccountTrustedDomainPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], AccountTrustedDomainPathParams.prototype, "accountId", void 0);
    return AccountTrustedDomainPathParams;
}(utils_1.SpeakeasyBase));
exports.AccountTrustedDomainPathParams = AccountTrustedDomainPathParams;
var AccountTrustedDomainRequest = /** @class */ (function (_super) {
    __extends(AccountTrustedDomainRequest, _super);
    function AccountTrustedDomainRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AccountTrustedDomainPathParams)
    ], AccountTrustedDomainRequest.prototype, "pathParams", void 0);
    return AccountTrustedDomainRequest;
}(utils_1.SpeakeasyBase));
exports.AccountTrustedDomainRequest = AccountTrustedDomainRequest;
var AccountTrustedDomainResponse = /** @class */ (function (_super) {
    __extends(AccountTrustedDomainResponse, _super);
    function AccountTrustedDomainResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], AccountTrustedDomainResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AccountTrustedDomainResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], AccountTrustedDomainResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], AccountTrustedDomainResponse.prototype, "accountTrustedDomain200ApplicationJSONAny", void 0);
    return AccountTrustedDomainResponse;
}(utils_1.SpeakeasyBase));
exports.AccountTrustedDomainResponse = AccountTrustedDomainResponse;

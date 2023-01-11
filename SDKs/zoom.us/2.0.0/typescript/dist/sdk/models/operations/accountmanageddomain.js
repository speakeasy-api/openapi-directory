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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountManagedDomainResponse = exports.AccountManagedDomainRequest = exports.AccountManagedDomain200ApplicationJson = exports.AccountManagedDomain200ApplicationJsonDomains = exports.AccountManagedDomainSecurity = exports.AccountManagedDomainPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var AccountManagedDomainPathParams = /** @class */ (function (_super) {
    __extends(AccountManagedDomainPathParams, _super);
    function AccountManagedDomainPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], AccountManagedDomainPathParams.prototype, "accountId", void 0);
    return AccountManagedDomainPathParams;
}(utils_1.SpeakeasyBase));
exports.AccountManagedDomainPathParams = AccountManagedDomainPathParams;
var AccountManagedDomainSecurity = /** @class */ (function (_super) {
    __extends(AccountManagedDomainSecurity, _super);
    function AccountManagedDomainSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], AccountManagedDomainSecurity.prototype, "oAuth", void 0);
    return AccountManagedDomainSecurity;
}(utils_1.SpeakeasyBase));
exports.AccountManagedDomainSecurity = AccountManagedDomainSecurity;
var AccountManagedDomain200ApplicationJsonDomains = /** @class */ (function (_super) {
    __extends(AccountManagedDomain200ApplicationJsonDomains, _super);
    function AccountManagedDomain200ApplicationJsonDomains() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=domain" }),
        __metadata("design:type", String)
    ], AccountManagedDomain200ApplicationJsonDomains.prototype, "domain", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], AccountManagedDomain200ApplicationJsonDomains.prototype, "status", void 0);
    return AccountManagedDomain200ApplicationJsonDomains;
}(utils_1.SpeakeasyBase));
exports.AccountManagedDomain200ApplicationJsonDomains = AccountManagedDomain200ApplicationJsonDomains;
// AccountManagedDomain200ApplicationJson
/**
 * List of managed domains.
**/
var AccountManagedDomain200ApplicationJson = /** @class */ (function (_super) {
    __extends(AccountManagedDomain200ApplicationJson, _super);
    function AccountManagedDomain200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=domains", elemType: AccountManagedDomain200ApplicationJsonDomains }),
        __metadata("design:type", Array)
    ], AccountManagedDomain200ApplicationJson.prototype, "domains", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total_records" }),
        __metadata("design:type", Number)
    ], AccountManagedDomain200ApplicationJson.prototype, "totalRecords", void 0);
    return AccountManagedDomain200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.AccountManagedDomain200ApplicationJson = AccountManagedDomain200ApplicationJson;
var AccountManagedDomainRequest = /** @class */ (function (_super) {
    __extends(AccountManagedDomainRequest, _super);
    function AccountManagedDomainRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AccountManagedDomainPathParams)
    ], AccountManagedDomainRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AccountManagedDomainSecurity)
    ], AccountManagedDomainRequest.prototype, "security", void 0);
    return AccountManagedDomainRequest;
}(utils_1.SpeakeasyBase));
exports.AccountManagedDomainRequest = AccountManagedDomainRequest;
var AccountManagedDomainResponse = /** @class */ (function (_super) {
    __extends(AccountManagedDomainResponse, _super);
    function AccountManagedDomainResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], AccountManagedDomainResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AccountManagedDomainResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], AccountManagedDomainResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AccountManagedDomain200ApplicationJson)
    ], AccountManagedDomainResponse.prototype, "accountManagedDomain200ApplicationJSONObject", void 0);
    return AccountManagedDomainResponse;
}(utils_1.SpeakeasyBase));
exports.AccountManagedDomainResponse = AccountManagedDomainResponse;

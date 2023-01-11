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
exports.GetSwitchResponse = exports.GetSwitchRequest = exports.GetSwitchSecurity = exports.GetSwitchHeaders = exports.GetSwitchQueryParams = exports.GetSwitchPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetSwitchPathParams = /** @class */ (function (_super) {
    __extends(GetSwitchPathParams, _super);
    function GetSwitchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=switch_transaction_id" }),
        __metadata("design:type", String)
    ], GetSwitchPathParams.prototype, "switchTransactionId", void 0);
    return GetSwitchPathParams;
}(utils_1.SpeakeasyBase));
exports.GetSwitchPathParams = GetSwitchPathParams;
var GetSwitchQueryParams = /** @class */ (function (_super) {
    __extends(GetSwitchQueryParams, _super);
    function GetSwitchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=include_details" }),
        __metadata("design:type", Boolean)
    ], GetSwitchQueryParams.prototype, "includeDetails", void 0);
    return GetSwitchQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetSwitchQueryParams = GetSwitchQueryParams;
var GetSwitchHeaders = /** @class */ (function (_super) {
    __extends(GetSwitchHeaders, _super);
    function GetSwitchHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=x-api-key" }),
        __metadata("design:type", String)
    ], GetSwitchHeaders.prototype, "xApiKey", void 0);
    return GetSwitchHeaders;
}(utils_1.SpeakeasyBase));
exports.GetSwitchHeaders = GetSwitchHeaders;
var GetSwitchSecurity = /** @class */ (function (_super) {
    __extends(GetSwitchSecurity, _super);
    function GetSwitchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiSecretKey)
    ], GetSwitchSecurity.prototype, "apiSecretKey", void 0);
    return GetSwitchSecurity;
}(utils_1.SpeakeasyBase));
exports.GetSwitchSecurity = GetSwitchSecurity;
var GetSwitchRequest = /** @class */ (function (_super) {
    __extends(GetSwitchRequest, _super);
    function GetSwitchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetSwitchPathParams)
    ], GetSwitchRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetSwitchQueryParams)
    ], GetSwitchRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetSwitchHeaders)
    ], GetSwitchRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetSwitchSecurity)
    ], GetSwitchRequest.prototype, "security", void 0);
    return GetSwitchRequest;
}(utils_1.SpeakeasyBase));
exports.GetSwitchRequest = GetSwitchRequest;
var GetSwitchResponse = /** @class */ (function (_super) {
    __extends(GetSwitchResponse, _super);
    function GetSwitchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetSwitchResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetSwitchResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetSwitchResponse.prototype, "getSwitch200ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetSwitchResponse.prototype, "getSwitch400ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetSwitchResponse.prototype, "getSwitch401ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetSwitchResponse.prototype, "getSwitch403ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetSwitchResponse.prototype, "getSwitch404ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetSwitchResponse.prototype, "getSwitch409ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetSwitchResponse.prototype, "getSwitch429ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetSwitchResponse.prototype, "getSwitch500ApplicationJSONAny", void 0);
    return GetSwitchResponse;
}(utils_1.SpeakeasyBase));
exports.GetSwitchResponse = GetSwitchResponse;

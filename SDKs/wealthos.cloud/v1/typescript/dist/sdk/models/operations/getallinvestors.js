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
exports.GetAllInvestorsResponse = exports.GetAllInvestorsRequest = exports.GetAllInvestors200ApplicationJson = exports.GetAllInvestorsSecurity = exports.GetAllInvestorsHeaders = exports.GetAllInvestorsQueryParams = exports.GetAllInvestorsSortEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetAllInvestorsSortEnum;
(function (GetAllInvestorsSortEnum) {
    GetAllInvestorsSortEnum["Asc"] = "asc";
    GetAllInvestorsSortEnum["Desc"] = "desc";
})(GetAllInvestorsSortEnum = exports.GetAllInvestorsSortEnum || (exports.GetAllInvestorsSortEnum = {}));
var GetAllInvestorsQueryParams = /** @class */ (function (_super) {
    __extends(GetAllInvestorsQueryParams, _super);
    function GetAllInvestorsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page_number" }),
        __metadata("design:type", String)
    ], GetAllInvestorsQueryParams.prototype, "pageNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", String)
    ], GetAllInvestorsQueryParams.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetAllInvestorsQueryParams.prototype, "sort", void 0);
    return GetAllInvestorsQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetAllInvestorsQueryParams = GetAllInvestorsQueryParams;
var GetAllInvestorsHeaders = /** @class */ (function (_super) {
    __extends(GetAllInvestorsHeaders, _super);
    function GetAllInvestorsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=x-api-key" }),
        __metadata("design:type", String)
    ], GetAllInvestorsHeaders.prototype, "xApiKey", void 0);
    return GetAllInvestorsHeaders;
}(utils_1.SpeakeasyBase));
exports.GetAllInvestorsHeaders = GetAllInvestorsHeaders;
var GetAllInvestorsSecurity = /** @class */ (function (_super) {
    __extends(GetAllInvestorsSecurity, _super);
    function GetAllInvestorsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiSecretKey)
    ], GetAllInvestorsSecurity.prototype, "apiSecretKey", void 0);
    return GetAllInvestorsSecurity;
}(utils_1.SpeakeasyBase));
exports.GetAllInvestorsSecurity = GetAllInvestorsSecurity;
// GetAllInvestors200ApplicationJson
/**
 * Array of investors
**/
var GetAllInvestors200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetAllInvestors200ApplicationJson, _super);
    function GetAllInvestors200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=investors" }),
        __metadata("design:type", Array)
    ], GetAllInvestors200ApplicationJson.prototype, "investors", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_available" }),
        __metadata("design:type", Boolean)
    ], GetAllInvestors200ApplicationJson.prototype, "nextPageAvailable", void 0);
    return GetAllInvestors200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetAllInvestors200ApplicationJson = GetAllInvestors200ApplicationJson;
var GetAllInvestorsRequest = /** @class */ (function (_super) {
    __extends(GetAllInvestorsRequest, _super);
    function GetAllInvestorsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetAllInvestorsQueryParams)
    ], GetAllInvestorsRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetAllInvestorsHeaders)
    ], GetAllInvestorsRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetAllInvestorsSecurity)
    ], GetAllInvestorsRequest.prototype, "security", void 0);
    return GetAllInvestorsRequest;
}(utils_1.SpeakeasyBase));
exports.GetAllInvestorsRequest = GetAllInvestorsRequest;
var GetAllInvestorsResponse = /** @class */ (function (_super) {
    __extends(GetAllInvestorsResponse, _super);
    function GetAllInvestorsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetAllInvestorsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetAllInvestorsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetAllInvestors200ApplicationJson)
    ], GetAllInvestorsResponse.prototype, "getAllInvestors200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetAllInvestorsResponse.prototype, "getAllInvestors400ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetAllInvestorsResponse.prototype, "getAllInvestors401ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetAllInvestorsResponse.prototype, "getAllInvestors403ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetAllInvestorsResponse.prototype, "getAllInvestors429ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetAllInvestorsResponse.prototype, "getAllInvestors500ApplicationJSONAny", void 0);
    return GetAllInvestorsResponse;
}(utils_1.SpeakeasyBase));
exports.GetAllInvestorsResponse = GetAllInvestorsResponse;

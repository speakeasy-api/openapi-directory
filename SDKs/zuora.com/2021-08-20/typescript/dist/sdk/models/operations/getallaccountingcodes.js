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
exports.GetAllAccountingCodesResponse = exports.GetAllAccountingCodesRequest = exports.GetAllAccountingCodesHeaders = exports.GetAllAccountingCodesQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetAllAccountingCodesQueryParams = /** @class */ (function (_super) {
    __extends(GetAllAccountingCodesQueryParams, _super);
    function GetAllAccountingCodesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], GetAllAccountingCodesQueryParams.prototype, "pageSize", void 0);
    return GetAllAccountingCodesQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetAllAccountingCodesQueryParams = GetAllAccountingCodesQueryParams;
var GetAllAccountingCodesHeaders = /** @class */ (function (_super) {
    __extends(GetAllAccountingCodesHeaders, _super);
    function GetAllAccountingCodesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" }),
        __metadata("design:type", String)
    ], GetAllAccountingCodesHeaders.prototype, "zuoraEntityIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" }),
        __metadata("design:type", String)
    ], GetAllAccountingCodesHeaders.prototype, "zuoraTrackId", void 0);
    return GetAllAccountingCodesHeaders;
}(utils_1.SpeakeasyBase));
exports.GetAllAccountingCodesHeaders = GetAllAccountingCodesHeaders;
var GetAllAccountingCodesRequest = /** @class */ (function (_super) {
    __extends(GetAllAccountingCodesRequest, _super);
    function GetAllAccountingCodesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetAllAccountingCodesQueryParams)
    ], GetAllAccountingCodesRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetAllAccountingCodesHeaders)
    ], GetAllAccountingCodesRequest.prototype, "headers", void 0);
    return GetAllAccountingCodesRequest;
}(utils_1.SpeakeasyBase));
exports.GetAllAccountingCodesRequest = GetAllAccountingCodesRequest;
var GetAllAccountingCodesResponse = /** @class */ (function (_super) {
    __extends(GetAllAccountingCodesResponse, _super);
    function GetAllAccountingCodesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetAllAccountingCodesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.GetAccountingCodesType)
    ], GetAllAccountingCodesResponse.prototype, "getAccountingCodesType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetAllAccountingCodesResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetAllAccountingCodesResponse.prototype, "statusCode", void 0);
    return GetAllAccountingCodesResponse;
}(utils_1.SpeakeasyBase));
exports.GetAllAccountingCodesResponse = GetAllAccountingCodesResponse;

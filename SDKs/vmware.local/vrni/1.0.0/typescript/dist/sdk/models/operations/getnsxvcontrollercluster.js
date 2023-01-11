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
exports.GetNsxvControllerClusterResponse = exports.GetNsxvControllerClusterRequest = exports.GetNsxvControllerClusterSecurity = exports.GetNsxvControllerClusterPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetNsxvControllerClusterPathParams = /** @class */ (function (_super) {
    __extends(GetNsxvControllerClusterPathParams, _super);
    function GetNsxvControllerClusterPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetNsxvControllerClusterPathParams.prototype, "id", void 0);
    return GetNsxvControllerClusterPathParams;
}(utils_1.SpeakeasyBase));
exports.GetNsxvControllerClusterPathParams = GetNsxvControllerClusterPathParams;
var GetNsxvControllerClusterSecurity = /** @class */ (function (_super) {
    __extends(GetNsxvControllerClusterSecurity, _super);
    function GetNsxvControllerClusterSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKeyAuth)
    ], GetNsxvControllerClusterSecurity.prototype, "apiKeyAuth", void 0);
    return GetNsxvControllerClusterSecurity;
}(utils_1.SpeakeasyBase));
exports.GetNsxvControllerClusterSecurity = GetNsxvControllerClusterSecurity;
var GetNsxvControllerClusterRequest = /** @class */ (function (_super) {
    __extends(GetNsxvControllerClusterRequest, _super);
    function GetNsxvControllerClusterRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetNsxvControllerClusterPathParams)
    ], GetNsxvControllerClusterRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetNsxvControllerClusterSecurity)
    ], GetNsxvControllerClusterRequest.prototype, "security", void 0);
    return GetNsxvControllerClusterRequest;
}(utils_1.SpeakeasyBase));
exports.GetNsxvControllerClusterRequest = GetNsxvControllerClusterRequest;
var GetNsxvControllerClusterResponse = /** @class */ (function (_super) {
    __extends(GetNsxvControllerClusterResponse, _super);
    function GetNsxvControllerClusterResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetNsxvControllerClusterResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.NsxControllerDataCollection)
    ], GetNsxvControllerClusterResponse.prototype, "nsxControllerDataCollection", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetNsxvControllerClusterResponse.prototype, "statusCode", void 0);
    return GetNsxvControllerClusterResponse;
}(utils_1.SpeakeasyBase));
exports.GetNsxvControllerClusterResponse = GetNsxvControllerClusterResponse;

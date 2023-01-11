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
exports.ServicePrincipalsAddOwnerResponse = exports.ServicePrincipalsAddOwnerRequest = exports.ServicePrincipalsAddOwnerRequests = exports.ServicePrincipalsAddOwnerQueryParams = exports.ServicePrincipalsAddOwnerPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ServicePrincipalsAddOwnerPathParams = /** @class */ (function (_super) {
    __extends(ServicePrincipalsAddOwnerPathParams, _super);
    function ServicePrincipalsAddOwnerPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=objectId" }),
        __metadata("design:type", String)
    ], ServicePrincipalsAddOwnerPathParams.prototype, "objectId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=tenantID" }),
        __metadata("design:type", String)
    ], ServicePrincipalsAddOwnerPathParams.prototype, "tenantID", void 0);
    return ServicePrincipalsAddOwnerPathParams;
}(utils_1.SpeakeasyBase));
exports.ServicePrincipalsAddOwnerPathParams = ServicePrincipalsAddOwnerPathParams;
var ServicePrincipalsAddOwnerQueryParams = /** @class */ (function (_super) {
    __extends(ServicePrincipalsAddOwnerQueryParams, _super);
    function ServicePrincipalsAddOwnerQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=api-version" }),
        __metadata("design:type", String)
    ], ServicePrincipalsAddOwnerQueryParams.prototype, "apiVersion", void 0);
    return ServicePrincipalsAddOwnerQueryParams;
}(utils_1.SpeakeasyBase));
exports.ServicePrincipalsAddOwnerQueryParams = ServicePrincipalsAddOwnerQueryParams;
var ServicePrincipalsAddOwnerRequests = /** @class */ (function (_super) {
    __extends(ServicePrincipalsAddOwnerRequests, _super);
    function ServicePrincipalsAddOwnerRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], ServicePrincipalsAddOwnerRequests.prototype, "addOwnerParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/json" }),
        __metadata("design:type", Object)
    ], ServicePrincipalsAddOwnerRequests.prototype, "addOwnerParameters1", void 0);
    return ServicePrincipalsAddOwnerRequests;
}(utils_1.SpeakeasyBase));
exports.ServicePrincipalsAddOwnerRequests = ServicePrincipalsAddOwnerRequests;
var ServicePrincipalsAddOwnerRequest = /** @class */ (function (_super) {
    __extends(ServicePrincipalsAddOwnerRequest, _super);
    function ServicePrincipalsAddOwnerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ServicePrincipalsAddOwnerPathParams)
    ], ServicePrincipalsAddOwnerRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ServicePrincipalsAddOwnerQueryParams)
    ], ServicePrincipalsAddOwnerRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ServicePrincipalsAddOwnerRequests)
    ], ServicePrincipalsAddOwnerRequest.prototype, "request", void 0);
    return ServicePrincipalsAddOwnerRequest;
}(utils_1.SpeakeasyBase));
exports.ServicePrincipalsAddOwnerRequest = ServicePrincipalsAddOwnerRequest;
var ServicePrincipalsAddOwnerResponse = /** @class */ (function (_super) {
    __extends(ServicePrincipalsAddOwnerResponse, _super);
    function ServicePrincipalsAddOwnerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ServicePrincipalsAddOwnerResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.GraphError)
    ], ServicePrincipalsAddOwnerResponse.prototype, "graphError", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ServicePrincipalsAddOwnerResponse.prototype, "statusCode", void 0);
    return ServicePrincipalsAddOwnerResponse;
}(utils_1.SpeakeasyBase));
exports.ServicePrincipalsAddOwnerResponse = ServicePrincipalsAddOwnerResponse;

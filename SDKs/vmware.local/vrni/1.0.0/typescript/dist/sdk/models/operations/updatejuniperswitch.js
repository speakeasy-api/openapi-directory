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
exports.UpdateJuniperSwitchResponse = exports.UpdateJuniperSwitchRequest = exports.UpdateJuniperSwitchSecurity = exports.UpdateJuniperSwitchPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var UpdateJuniperSwitchPathParams = /** @class */ (function (_super) {
    __extends(UpdateJuniperSwitchPathParams, _super);
    function UpdateJuniperSwitchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], UpdateJuniperSwitchPathParams.prototype, "id", void 0);
    return UpdateJuniperSwitchPathParams;
}(utils_1.SpeakeasyBase));
exports.UpdateJuniperSwitchPathParams = UpdateJuniperSwitchPathParams;
var UpdateJuniperSwitchSecurity = /** @class */ (function (_super) {
    __extends(UpdateJuniperSwitchSecurity, _super);
    function UpdateJuniperSwitchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKeyAuth)
    ], UpdateJuniperSwitchSecurity.prototype, "apiKeyAuth", void 0);
    return UpdateJuniperSwitchSecurity;
}(utils_1.SpeakeasyBase));
exports.UpdateJuniperSwitchSecurity = UpdateJuniperSwitchSecurity;
var UpdateJuniperSwitchRequest = /** @class */ (function (_super) {
    __extends(UpdateJuniperSwitchRequest, _super);
    function UpdateJuniperSwitchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateJuniperSwitchPathParams)
    ], UpdateJuniperSwitchRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SwitchDataSource)
    ], UpdateJuniperSwitchRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateJuniperSwitchSecurity)
    ], UpdateJuniperSwitchRequest.prototype, "security", void 0);
    return UpdateJuniperSwitchRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateJuniperSwitchRequest = UpdateJuniperSwitchRequest;
var UpdateJuniperSwitchResponse = /** @class */ (function (_super) {
    __extends(UpdateJuniperSwitchResponse, _super);
    function UpdateJuniperSwitchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ApiError)
    ], UpdateJuniperSwitchResponse.prototype, "apiError", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateJuniperSwitchResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateJuniperSwitchResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.SwitchDataSource)
    ], UpdateJuniperSwitchResponse.prototype, "switchDataSource", void 0);
    return UpdateJuniperSwitchResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateJuniperSwitchResponse = UpdateJuniperSwitchResponse;

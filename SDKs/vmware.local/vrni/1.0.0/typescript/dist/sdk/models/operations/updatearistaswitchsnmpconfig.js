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
exports.UpdateAristaSwitchSnmpConfigResponse = exports.UpdateAristaSwitchSnmpConfigRequest = exports.UpdateAristaSwitchSnmpConfigSecurity = exports.UpdateAristaSwitchSnmpConfigPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var UpdateAristaSwitchSnmpConfigPathParams = /** @class */ (function (_super) {
    __extends(UpdateAristaSwitchSnmpConfigPathParams, _super);
    function UpdateAristaSwitchSnmpConfigPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], UpdateAristaSwitchSnmpConfigPathParams.prototype, "id", void 0);
    return UpdateAristaSwitchSnmpConfigPathParams;
}(utils_1.SpeakeasyBase));
exports.UpdateAristaSwitchSnmpConfigPathParams = UpdateAristaSwitchSnmpConfigPathParams;
var UpdateAristaSwitchSnmpConfigSecurity = /** @class */ (function (_super) {
    __extends(UpdateAristaSwitchSnmpConfigSecurity, _super);
    function UpdateAristaSwitchSnmpConfigSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKeyAuth)
    ], UpdateAristaSwitchSnmpConfigSecurity.prototype, "apiKeyAuth", void 0);
    return UpdateAristaSwitchSnmpConfigSecurity;
}(utils_1.SpeakeasyBase));
exports.UpdateAristaSwitchSnmpConfigSecurity = UpdateAristaSwitchSnmpConfigSecurity;
var UpdateAristaSwitchSnmpConfigRequest = /** @class */ (function (_super) {
    __extends(UpdateAristaSwitchSnmpConfigRequest, _super);
    function UpdateAristaSwitchSnmpConfigRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateAristaSwitchSnmpConfigPathParams)
    ], UpdateAristaSwitchSnmpConfigRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SnmpConfig)
    ], UpdateAristaSwitchSnmpConfigRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateAristaSwitchSnmpConfigSecurity)
    ], UpdateAristaSwitchSnmpConfigRequest.prototype, "security", void 0);
    return UpdateAristaSwitchSnmpConfigRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateAristaSwitchSnmpConfigRequest = UpdateAristaSwitchSnmpConfigRequest;
var UpdateAristaSwitchSnmpConfigResponse = /** @class */ (function (_super) {
    __extends(UpdateAristaSwitchSnmpConfigResponse, _super);
    function UpdateAristaSwitchSnmpConfigResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ApiError)
    ], UpdateAristaSwitchSnmpConfigResponse.prototype, "apiError", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateAristaSwitchSnmpConfigResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.SnmpConfig)
    ], UpdateAristaSwitchSnmpConfigResponse.prototype, "snmpConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateAristaSwitchSnmpConfigResponse.prototype, "statusCode", void 0);
    return UpdateAristaSwitchSnmpConfigResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateAristaSwitchSnmpConfigResponse = UpdateAristaSwitchSnmpConfigResponse;

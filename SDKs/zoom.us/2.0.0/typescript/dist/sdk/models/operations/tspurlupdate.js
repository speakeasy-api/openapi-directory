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
exports.TspUrlUpdateResponse = exports.TspUrlUpdateRequest = exports.TspUrlUpdateSecurity = exports.TspUrlUpdateRequests = exports.TspUrlUpdateTspGlobalDialInUrlSetting = exports.TspUrlUpdatePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var TspUrlUpdatePathParams = /** @class */ (function (_super) {
    __extends(TspUrlUpdatePathParams, _super);
    function TspUrlUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], TspUrlUpdatePathParams.prototype, "userId", void 0);
    return TspUrlUpdatePathParams;
}(utils_1.SpeakeasyBase));
exports.TspUrlUpdatePathParams = TspUrlUpdatePathParams;
var TspUrlUpdateTspGlobalDialInUrlSetting = /** @class */ (function (_super) {
    __extends(TspUrlUpdateTspGlobalDialInUrlSetting, _super);
    function TspUrlUpdateTspGlobalDialInUrlSetting() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=audio_url, multipart_form, name=audio_url" }),
        __metadata("design:type", String)
    ], TspUrlUpdateTspGlobalDialInUrlSetting.prototype, "audioUrl", void 0);
    return TspUrlUpdateTspGlobalDialInUrlSetting;
}(utils_1.SpeakeasyBase));
exports.TspUrlUpdateTspGlobalDialInUrlSetting = TspUrlUpdateTspGlobalDialInUrlSetting;
var TspUrlUpdateRequests = /** @class */ (function (_super) {
    __extends(TspUrlUpdateRequests, _super);
    function TspUrlUpdateRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", TspUrlUpdateTspGlobalDialInUrlSetting)
    ], TspUrlUpdateRequests.prototype, "tspGlobalDialInURLSetting", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", TspUrlUpdateTspGlobalDialInUrlSetting)
    ], TspUrlUpdateRequests.prototype, "tspGlobalDialInURLSetting1", void 0);
    return TspUrlUpdateRequests;
}(utils_1.SpeakeasyBase));
exports.TspUrlUpdateRequests = TspUrlUpdateRequests;
var TspUrlUpdateSecurity = /** @class */ (function (_super) {
    __extends(TspUrlUpdateSecurity, _super);
    function TspUrlUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], TspUrlUpdateSecurity.prototype, "oAuth", void 0);
    return TspUrlUpdateSecurity;
}(utils_1.SpeakeasyBase));
exports.TspUrlUpdateSecurity = TspUrlUpdateSecurity;
var TspUrlUpdateRequest = /** @class */ (function (_super) {
    __extends(TspUrlUpdateRequest, _super);
    function TspUrlUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", TspUrlUpdatePathParams)
    ], TspUrlUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", TspUrlUpdateRequests)
    ], TspUrlUpdateRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", TspUrlUpdateSecurity)
    ], TspUrlUpdateRequest.prototype, "security", void 0);
    return TspUrlUpdateRequest;
}(utils_1.SpeakeasyBase));
exports.TspUrlUpdateRequest = TspUrlUpdateRequest;
var TspUrlUpdateResponse = /** @class */ (function (_super) {
    __extends(TspUrlUpdateResponse, _super);
    function TspUrlUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], TspUrlUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], TspUrlUpdateResponse.prototype, "statusCode", void 0);
    return TspUrlUpdateResponse;
}(utils_1.SpeakeasyBase));
exports.TspUrlUpdateResponse = TspUrlUpdateResponse;

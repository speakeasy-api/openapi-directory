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
exports.ChangeMainCompanyNumberResponse = exports.ChangeMainCompanyNumberRequest = exports.ChangeMainCompanyNumberSecurity = exports.ChangeMainCompanyNumberRequests = exports.ChangeMainCompanyNumberMultipartFormData = exports.ChangeMainCompanyNumberApplicationJson = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ChangeMainCompanyNumberApplicationJson = /** @class */ (function (_super) {
    __extends(ChangeMainCompanyNumberApplicationJson, _super);
    function ChangeMainCompanyNumberApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=phone_number" }),
        __metadata("design:type", String)
    ], ChangeMainCompanyNumberApplicationJson.prototype, "phoneNumber", void 0);
    return ChangeMainCompanyNumberApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ChangeMainCompanyNumberApplicationJson = ChangeMainCompanyNumberApplicationJson;
var ChangeMainCompanyNumberMultipartFormData = /** @class */ (function (_super) {
    __extends(ChangeMainCompanyNumberMultipartFormData, _super);
    function ChangeMainCompanyNumberMultipartFormData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=phone_number" }),
        __metadata("design:type", String)
    ], ChangeMainCompanyNumberMultipartFormData.prototype, "phoneNumber", void 0);
    return ChangeMainCompanyNumberMultipartFormData;
}(utils_1.SpeakeasyBase));
exports.ChangeMainCompanyNumberMultipartFormData = ChangeMainCompanyNumberMultipartFormData;
var ChangeMainCompanyNumberRequests = /** @class */ (function (_super) {
    __extends(ChangeMainCompanyNumberRequests, _super);
    function ChangeMainCompanyNumberRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", ChangeMainCompanyNumberApplicationJson)
    ], ChangeMainCompanyNumberRequests.prototype, "object", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", ChangeMainCompanyNumberMultipartFormData)
    ], ChangeMainCompanyNumberRequests.prototype, "object1", void 0);
    return ChangeMainCompanyNumberRequests;
}(utils_1.SpeakeasyBase));
exports.ChangeMainCompanyNumberRequests = ChangeMainCompanyNumberRequests;
var ChangeMainCompanyNumberSecurity = /** @class */ (function (_super) {
    __extends(ChangeMainCompanyNumberSecurity, _super);
    function ChangeMainCompanyNumberSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], ChangeMainCompanyNumberSecurity.prototype, "oAuth", void 0);
    return ChangeMainCompanyNumberSecurity;
}(utils_1.SpeakeasyBase));
exports.ChangeMainCompanyNumberSecurity = ChangeMainCompanyNumberSecurity;
var ChangeMainCompanyNumberRequest = /** @class */ (function (_super) {
    __extends(ChangeMainCompanyNumberRequest, _super);
    function ChangeMainCompanyNumberRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ChangeMainCompanyNumberRequests)
    ], ChangeMainCompanyNumberRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ChangeMainCompanyNumberSecurity)
    ], ChangeMainCompanyNumberRequest.prototype, "security", void 0);
    return ChangeMainCompanyNumberRequest;
}(utils_1.SpeakeasyBase));
exports.ChangeMainCompanyNumberRequest = ChangeMainCompanyNumberRequest;
var ChangeMainCompanyNumberResponse = /** @class */ (function (_super) {
    __extends(ChangeMainCompanyNumberResponse, _super);
    function ChangeMainCompanyNumberResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], ChangeMainCompanyNumberResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ChangeMainCompanyNumberResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ChangeMainCompanyNumberResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ChangeMainCompanyNumberResponse.prototype, "changeMainCompanyNumber204ApplicationJSONAny", void 0);
    return ChangeMainCompanyNumberResponse;
}(utils_1.SpeakeasyBase));
exports.ChangeMainCompanyNumberResponse = ChangeMainCompanyNumberResponse;

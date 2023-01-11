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
exports.AssignPhoneNumbersAutoReceptionistResponse = exports.AssignPhoneNumbersAutoReceptionistRequest = exports.AssignPhoneNumbersAutoReceptionistSecurity = exports.AssignPhoneNumbersAutoReceptionistRequests = exports.AssignPhoneNumbersAutoReceptionistMultipartFormData1 = exports.AssignPhoneNumbersAutoReceptionistMultipartFormDataPhoneNumbers = exports.AssignPhoneNumbersAutoReceptionistApplicationJson = exports.AssignPhoneNumbersAutoReceptionistApplicationJsonPhoneNumbers = exports.AssignPhoneNumbersAutoReceptionistPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var AssignPhoneNumbersAutoReceptionistPathParams = /** @class */ (function (_super) {
    __extends(AssignPhoneNumbersAutoReceptionistPathParams, _super);
    function AssignPhoneNumbersAutoReceptionistPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=autoReceptionistId" }),
        __metadata("design:type", String)
    ], AssignPhoneNumbersAutoReceptionistPathParams.prototype, "autoReceptionistId", void 0);
    return AssignPhoneNumbersAutoReceptionistPathParams;
}(utils_1.SpeakeasyBase));
exports.AssignPhoneNumbersAutoReceptionistPathParams = AssignPhoneNumbersAutoReceptionistPathParams;
var AssignPhoneNumbersAutoReceptionistApplicationJsonPhoneNumbers = /** @class */ (function (_super) {
    __extends(AssignPhoneNumbersAutoReceptionistApplicationJsonPhoneNumbers, _super);
    function AssignPhoneNumbersAutoReceptionistApplicationJsonPhoneNumbers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], AssignPhoneNumbersAutoReceptionistApplicationJsonPhoneNumbers.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=number" }),
        __metadata("design:type", String)
    ], AssignPhoneNumbersAutoReceptionistApplicationJsonPhoneNumbers.prototype, "number", void 0);
    return AssignPhoneNumbersAutoReceptionistApplicationJsonPhoneNumbers;
}(utils_1.SpeakeasyBase));
exports.AssignPhoneNumbersAutoReceptionistApplicationJsonPhoneNumbers = AssignPhoneNumbersAutoReceptionistApplicationJsonPhoneNumbers;
var AssignPhoneNumbersAutoReceptionistApplicationJson = /** @class */ (function (_super) {
    __extends(AssignPhoneNumbersAutoReceptionistApplicationJson, _super);
    function AssignPhoneNumbersAutoReceptionistApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=phone_numbers", elemType: AssignPhoneNumbersAutoReceptionistApplicationJsonPhoneNumbers }),
        __metadata("design:type", Array)
    ], AssignPhoneNumbersAutoReceptionistApplicationJson.prototype, "phoneNumbers", void 0);
    return AssignPhoneNumbersAutoReceptionistApplicationJson;
}(utils_1.SpeakeasyBase));
exports.AssignPhoneNumbersAutoReceptionistApplicationJson = AssignPhoneNumbersAutoReceptionistApplicationJson;
var AssignPhoneNumbersAutoReceptionistMultipartFormDataPhoneNumbers = /** @class */ (function (_super) {
    __extends(AssignPhoneNumbersAutoReceptionistMultipartFormDataPhoneNumbers, _super);
    function AssignPhoneNumbersAutoReceptionistMultipartFormDataPhoneNumbers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], AssignPhoneNumbersAutoReceptionistMultipartFormDataPhoneNumbers.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=number" }),
        __metadata("design:type", String)
    ], AssignPhoneNumbersAutoReceptionistMultipartFormDataPhoneNumbers.prototype, "number", void 0);
    return AssignPhoneNumbersAutoReceptionistMultipartFormDataPhoneNumbers;
}(utils_1.SpeakeasyBase));
exports.AssignPhoneNumbersAutoReceptionistMultipartFormDataPhoneNumbers = AssignPhoneNumbersAutoReceptionistMultipartFormDataPhoneNumbers;
var AssignPhoneNumbersAutoReceptionistMultipartFormData1 = /** @class */ (function (_super) {
    __extends(AssignPhoneNumbersAutoReceptionistMultipartFormData1, _super);
    function AssignPhoneNumbersAutoReceptionistMultipartFormData1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=phone_numbers;json=true", elemType: AssignPhoneNumbersAutoReceptionistMultipartFormDataPhoneNumbers }),
        __metadata("design:type", Array)
    ], AssignPhoneNumbersAutoReceptionistMultipartFormData1.prototype, "phoneNumbers", void 0);
    return AssignPhoneNumbersAutoReceptionistMultipartFormData1;
}(utils_1.SpeakeasyBase));
exports.AssignPhoneNumbersAutoReceptionistMultipartFormData1 = AssignPhoneNumbersAutoReceptionistMultipartFormData1;
var AssignPhoneNumbersAutoReceptionistRequests = /** @class */ (function (_super) {
    __extends(AssignPhoneNumbersAutoReceptionistRequests, _super);
    function AssignPhoneNumbersAutoReceptionistRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", AssignPhoneNumbersAutoReceptionistApplicationJson)
    ], AssignPhoneNumbersAutoReceptionistRequests.prototype, "object", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", AssignPhoneNumbersAutoReceptionistMultipartFormData1)
    ], AssignPhoneNumbersAutoReceptionistRequests.prototype, "object1", void 0);
    return AssignPhoneNumbersAutoReceptionistRequests;
}(utils_1.SpeakeasyBase));
exports.AssignPhoneNumbersAutoReceptionistRequests = AssignPhoneNumbersAutoReceptionistRequests;
var AssignPhoneNumbersAutoReceptionistSecurity = /** @class */ (function (_super) {
    __extends(AssignPhoneNumbersAutoReceptionistSecurity, _super);
    function AssignPhoneNumbersAutoReceptionistSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], AssignPhoneNumbersAutoReceptionistSecurity.prototype, "oAuth", void 0);
    return AssignPhoneNumbersAutoReceptionistSecurity;
}(utils_1.SpeakeasyBase));
exports.AssignPhoneNumbersAutoReceptionistSecurity = AssignPhoneNumbersAutoReceptionistSecurity;
var AssignPhoneNumbersAutoReceptionistRequest = /** @class */ (function (_super) {
    __extends(AssignPhoneNumbersAutoReceptionistRequest, _super);
    function AssignPhoneNumbersAutoReceptionistRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AssignPhoneNumbersAutoReceptionistPathParams)
    ], AssignPhoneNumbersAutoReceptionistRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AssignPhoneNumbersAutoReceptionistRequests)
    ], AssignPhoneNumbersAutoReceptionistRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AssignPhoneNumbersAutoReceptionistSecurity)
    ], AssignPhoneNumbersAutoReceptionistRequest.prototype, "security", void 0);
    return AssignPhoneNumbersAutoReceptionistRequest;
}(utils_1.SpeakeasyBase));
exports.AssignPhoneNumbersAutoReceptionistRequest = AssignPhoneNumbersAutoReceptionistRequest;
var AssignPhoneNumbersAutoReceptionistResponse = /** @class */ (function (_super) {
    __extends(AssignPhoneNumbersAutoReceptionistResponse, _super);
    function AssignPhoneNumbersAutoReceptionistResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], AssignPhoneNumbersAutoReceptionistResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AssignPhoneNumbersAutoReceptionistResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], AssignPhoneNumbersAutoReceptionistResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], AssignPhoneNumbersAutoReceptionistResponse.prototype, "assignPhoneNumbersAutoReceptionist204ApplicationJSONAny", void 0);
    return AssignPhoneNumbersAutoReceptionistResponse;
}(utils_1.SpeakeasyBase));
exports.AssignPhoneNumbersAutoReceptionistResponse = AssignPhoneNumbersAutoReceptionistResponse;

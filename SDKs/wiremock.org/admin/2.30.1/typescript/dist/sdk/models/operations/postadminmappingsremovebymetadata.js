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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostAdminMappingsRemoveByMetadataResponse = exports.PostAdminMappingsRemoveByMetadataRequest = exports.PostAdminMappingsRemoveByMetadataRequestBodyXPathMatch = exports.PostAdminMappingsRemoveByMetadataRequestBodyXmlEquality = exports.PostAdminMappingsRemoveByMetadataRequestBodyJsonPathMatch = exports.PostAdminMappingsRemoveByMetadataRequestBodyJsonEquals = exports.PostAdminMappingsRemoveByMetadataRequestBodyNegativeRegularExpressionMatch = exports.PostAdminMappingsRemoveByMetadataRequestBodyRegularExpressionMatch = exports.PostAdminMappingsRemoveByMetadataRequestBodyStringContains = exports.PostAdminMappingsRemoveByMetadataRequestBodyStringEquals = void 0;
var utils_1 = require("../../../internal/utils");
var PostAdminMappingsRemoveByMetadataRequestBodyStringEquals = /** @class */ (function (_super) {
    __extends(PostAdminMappingsRemoveByMetadataRequestBodyStringEquals, _super);
    function PostAdminMappingsRemoveByMetadataRequestBodyStringEquals() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=caseInsensitive" }),
        __metadata("design:type", Boolean)
    ], PostAdminMappingsRemoveByMetadataRequestBodyStringEquals.prototype, "caseInsensitive", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=equalTo" }),
        __metadata("design:type", Boolean)
    ], PostAdminMappingsRemoveByMetadataRequestBodyStringEquals.prototype, "equalTo", void 0);
    return PostAdminMappingsRemoveByMetadataRequestBodyStringEquals;
}(utils_1.SpeakeasyBase));
exports.PostAdminMappingsRemoveByMetadataRequestBodyStringEquals = PostAdminMappingsRemoveByMetadataRequestBodyStringEquals;
var PostAdminMappingsRemoveByMetadataRequestBodyStringContains = /** @class */ (function (_super) {
    __extends(PostAdminMappingsRemoveByMetadataRequestBodyStringContains, _super);
    function PostAdminMappingsRemoveByMetadataRequestBodyStringContains() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=contains" }),
        __metadata("design:type", String)
    ], PostAdminMappingsRemoveByMetadataRequestBodyStringContains.prototype, "contains", void 0);
    return PostAdminMappingsRemoveByMetadataRequestBodyStringContains;
}(utils_1.SpeakeasyBase));
exports.PostAdminMappingsRemoveByMetadataRequestBodyStringContains = PostAdminMappingsRemoveByMetadataRequestBodyStringContains;
var PostAdminMappingsRemoveByMetadataRequestBodyRegularExpressionMatch = /** @class */ (function (_super) {
    __extends(PostAdminMappingsRemoveByMetadataRequestBodyRegularExpressionMatch, _super);
    function PostAdminMappingsRemoveByMetadataRequestBodyRegularExpressionMatch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=matches" }),
        __metadata("design:type", String)
    ], PostAdminMappingsRemoveByMetadataRequestBodyRegularExpressionMatch.prototype, "matches", void 0);
    return PostAdminMappingsRemoveByMetadataRequestBodyRegularExpressionMatch;
}(utils_1.SpeakeasyBase));
exports.PostAdminMappingsRemoveByMetadataRequestBodyRegularExpressionMatch = PostAdminMappingsRemoveByMetadataRequestBodyRegularExpressionMatch;
var PostAdminMappingsRemoveByMetadataRequestBodyNegativeRegularExpressionMatch = /** @class */ (function (_super) {
    __extends(PostAdminMappingsRemoveByMetadataRequestBodyNegativeRegularExpressionMatch, _super);
    function PostAdminMappingsRemoveByMetadataRequestBodyNegativeRegularExpressionMatch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=doesNotMatch" }),
        __metadata("design:type", String)
    ], PostAdminMappingsRemoveByMetadataRequestBodyNegativeRegularExpressionMatch.prototype, "doesNotMatch", void 0);
    return PostAdminMappingsRemoveByMetadataRequestBodyNegativeRegularExpressionMatch;
}(utils_1.SpeakeasyBase));
exports.PostAdminMappingsRemoveByMetadataRequestBodyNegativeRegularExpressionMatch = PostAdminMappingsRemoveByMetadataRequestBodyNegativeRegularExpressionMatch;
var PostAdminMappingsRemoveByMetadataRequestBodyJsonEquals = /** @class */ (function (_super) {
    __extends(PostAdminMappingsRemoveByMetadataRequestBodyJsonEquals, _super);
    function PostAdminMappingsRemoveByMetadataRequestBodyJsonEquals() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=equalToJson" }),
        __metadata("design:type", String)
    ], PostAdminMappingsRemoveByMetadataRequestBodyJsonEquals.prototype, "equalToJson", void 0);
    return PostAdminMappingsRemoveByMetadataRequestBodyJsonEquals;
}(utils_1.SpeakeasyBase));
exports.PostAdminMappingsRemoveByMetadataRequestBodyJsonEquals = PostAdminMappingsRemoveByMetadataRequestBodyJsonEquals;
var PostAdminMappingsRemoveByMetadataRequestBodyJsonPathMatch = /** @class */ (function (_super) {
    __extends(PostAdminMappingsRemoveByMetadataRequestBodyJsonPathMatch, _super);
    function PostAdminMappingsRemoveByMetadataRequestBodyJsonPathMatch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ignoreArrayOrder" }),
        __metadata("design:type", Boolean)
    ], PostAdminMappingsRemoveByMetadataRequestBodyJsonPathMatch.prototype, "ignoreArrayOrder", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ignoreExtraElements" }),
        __metadata("design:type", Boolean)
    ], PostAdminMappingsRemoveByMetadataRequestBodyJsonPathMatch.prototype, "ignoreExtraElements", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=matchesJsonPath" }),
        __metadata("design:type", String)
    ], PostAdminMappingsRemoveByMetadataRequestBodyJsonPathMatch.prototype, "matchesJsonPath", void 0);
    return PostAdminMappingsRemoveByMetadataRequestBodyJsonPathMatch;
}(utils_1.SpeakeasyBase));
exports.PostAdminMappingsRemoveByMetadataRequestBodyJsonPathMatch = PostAdminMappingsRemoveByMetadataRequestBodyJsonPathMatch;
var PostAdminMappingsRemoveByMetadataRequestBodyXmlEquality = /** @class */ (function (_super) {
    __extends(PostAdminMappingsRemoveByMetadataRequestBodyXmlEquality, _super);
    function PostAdminMappingsRemoveByMetadataRequestBodyXmlEquality() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=equalToXml" }),
        __metadata("design:type", String)
    ], PostAdminMappingsRemoveByMetadataRequestBodyXmlEquality.prototype, "equalToXml", void 0);
    return PostAdminMappingsRemoveByMetadataRequestBodyXmlEquality;
}(utils_1.SpeakeasyBase));
exports.PostAdminMappingsRemoveByMetadataRequestBodyXmlEquality = PostAdminMappingsRemoveByMetadataRequestBodyXmlEquality;
var PostAdminMappingsRemoveByMetadataRequestBodyXPathMatch = /** @class */ (function (_super) {
    __extends(PostAdminMappingsRemoveByMetadataRequestBodyXPathMatch, _super);
    function PostAdminMappingsRemoveByMetadataRequestBodyXPathMatch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=matchesXpath" }),
        __metadata("design:type", String)
    ], PostAdminMappingsRemoveByMetadataRequestBodyXPathMatch.prototype, "matchesXpath", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=namespaces" }),
        __metadata("design:type", Object)
    ], PostAdminMappingsRemoveByMetadataRequestBodyXPathMatch.prototype, "namespaces", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=valuePattern" }),
        __metadata("design:type", Object)
    ], PostAdminMappingsRemoveByMetadataRequestBodyXPathMatch.prototype, "valuePattern", void 0);
    return PostAdminMappingsRemoveByMetadataRequestBodyXPathMatch;
}(utils_1.SpeakeasyBase));
exports.PostAdminMappingsRemoveByMetadataRequestBodyXPathMatch = PostAdminMappingsRemoveByMetadataRequestBodyXPathMatch;
var PostAdminMappingsRemoveByMetadataRequest = /** @class */ (function (_super) {
    __extends(PostAdminMappingsRemoveByMetadataRequest, _super);
    function PostAdminMappingsRemoveByMetadataRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], PostAdminMappingsRemoveByMetadataRequest.prototype, "request", void 0);
    return PostAdminMappingsRemoveByMetadataRequest;
}(utils_1.SpeakeasyBase));
exports.PostAdminMappingsRemoveByMetadataRequest = PostAdminMappingsRemoveByMetadataRequest;
var PostAdminMappingsRemoveByMetadataResponse = /** @class */ (function (_super) {
    __extends(PostAdminMappingsRemoveByMetadataResponse, _super);
    function PostAdminMappingsRemoveByMetadataResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostAdminMappingsRemoveByMetadataResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostAdminMappingsRemoveByMetadataResponse.prototype, "statusCode", void 0);
    return PostAdminMappingsRemoveByMetadataResponse;
}(utils_1.SpeakeasyBase));
exports.PostAdminMappingsRemoveByMetadataResponse = PostAdminMappingsRemoveByMetadataResponse;

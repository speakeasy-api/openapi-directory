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
exports.FilterRuleParameterDefinition = exports.FilterRuleParameterDefinitionValueTypeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var FilterRuleParameterDefinitionValueTypeEnum;
(function (FilterRuleParameterDefinitionValueTypeEnum) {
    FilterRuleParameterDefinitionValueTypeEnum["String"] = "STRING";
    FilterRuleParameterDefinitionValueTypeEnum["Byte"] = "BYTE";
    FilterRuleParameterDefinitionValueTypeEnum["Short"] = "SHORT";
    FilterRuleParameterDefinitionValueTypeEnum["Character"] = "CHARACTER";
    FilterRuleParameterDefinitionValueTypeEnum["Integer"] = "INTEGER";
    FilterRuleParameterDefinitionValueTypeEnum["Long"] = "LONG";
    FilterRuleParameterDefinitionValueTypeEnum["Float"] = "FLOAT";
    FilterRuleParameterDefinitionValueTypeEnum["Double"] = "DOUBLE";
    FilterRuleParameterDefinitionValueTypeEnum["Boolean"] = "BOOLEAN";
    FilterRuleParameterDefinitionValueTypeEnum["BigInteger"] = "BIG_INTEGER";
    FilterRuleParameterDefinitionValueTypeEnum["BigDecimal"] = "BIG_DECIMAL";
    FilterRuleParameterDefinitionValueTypeEnum["LocalDate"] = "LOCAL_DATE";
    FilterRuleParameterDefinitionValueTypeEnum["LocalDateTime"] = "LOCAL_DATE_TIME";
    FilterRuleParameterDefinitionValueTypeEnum["Timestamp"] = "TIMESTAMP";
    FilterRuleParameterDefinitionValueTypeEnum["ByteArray"] = "BYTE_ARRAY";
    FilterRuleParameterDefinitionValueTypeEnum["ShortArray"] = "SHORT_ARRAY";
    FilterRuleParameterDefinitionValueTypeEnum["CharacterArray"] = "CHARACTER_ARRAY";
    FilterRuleParameterDefinitionValueTypeEnum["IntegerArray"] = "INTEGER_ARRAY";
    FilterRuleParameterDefinitionValueTypeEnum["FloatArray"] = "FLOAT_ARRAY";
    FilterRuleParameterDefinitionValueTypeEnum["DoubleArray"] = "DOUBLE_ARRAY";
    FilterRuleParameterDefinitionValueTypeEnum["BooleanArray"] = "BOOLEAN_ARRAY";
    FilterRuleParameterDefinitionValueTypeEnum["StringArray"] = "STRING_ARRAY";
    FilterRuleParameterDefinitionValueTypeEnum["BigIntegerArray"] = "BIG_INTEGER_ARRAY";
    FilterRuleParameterDefinitionValueTypeEnum["BigDecimalArray"] = "BIG_DECIMAL_ARRAY";
    FilterRuleParameterDefinitionValueTypeEnum["LocalDateArray"] = "LOCAL_DATE_ARRAY";
    FilterRuleParameterDefinitionValueTypeEnum["LocalDateTimeArray"] = "LOCAL_DATE_TIME_ARRAY";
    FilterRuleParameterDefinitionValueTypeEnum["TimestampArray"] = "TIMESTAMP_ARRAY";
})(FilterRuleParameterDefinitionValueTypeEnum = exports.FilterRuleParameterDefinitionValueTypeEnum || (exports.FilterRuleParameterDefinitionValueTypeEnum = {}));
var FilterRuleParameterDefinition = /** @class */ (function (_super) {
    __extends(FilterRuleParameterDefinition, _super);
    function FilterRuleParameterDefinition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], FilterRuleParameterDefinition.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], FilterRuleParameterDefinition.prototype, "displayName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], FilterRuleParameterDefinition.prototype, "options", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=valueType" }),
        __metadata("design:type", String)
    ], FilterRuleParameterDefinition.prototype, "valueType", void 0);
    return FilterRuleParameterDefinition;
}(utils_1.SpeakeasyBase));
exports.FilterRuleParameterDefinition = FilterRuleParameterDefinition;

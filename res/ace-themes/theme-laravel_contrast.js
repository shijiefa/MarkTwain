/* ***** BEGIN LICENSE BLOCK *****
 * Distributed under the BSD license:
 *
 * Copyright (c) 2010, Ajax.org B.V.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *     * Redistributions of source code must retain the above copyright
 *       notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above copyright
 *       notice, this list of conditions and the following disclaimer in the
 *       documentation and/or other materials provided with the distribution.
 *     * Neither the name of Ajax.org B.V. nor the
 *       names of its contributors may be used to endorse or promote products
 *       derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL AJAX.ORG B.V. BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * ***** END LICENSE BLOCK ***** */

define('ace/theme/laravel_contrast', ['require', 'exports', 'module' , 'ace/lib/dom'], function(require, exports, module) {

exports.isDark = true;
exports.cssClass = "ace-laravel-contrast";
exports.cssText = "/* THIS THEME WAS AUTOGENERATED BY Theme.tmpl.css (UUID: e9ed0496-1491-af43-5ddd-e58daacdf095) */\
.ace-laravel-contrast .ace_gutter {\
background: #e8e8e8;\
color: #333;\
}\
.ace-laravel-contrast .ace_print-margin {\
width: 1px;\
background: #e8e8e8;\
}\
.ace-laravel-contrast {\
background-color: #000000;\
color: #ffffff;\
}\
.ace-laravel-contrast .ace_cursor {\
color: #f8f8f0;\
}\
.ace-laravel-contrast .ace_marker-layer .ace_selection {\
background: #cd724e;\
}\
.ace-laravel-contrast.ace_multiselect .ace_selection.ace_start {\
box-shadow: 0 0 3px 0px #000000;\
border-radius: 2px;\
}\
.ace-laravel-contrast .ace_marker-layer .ace_step {\
background: rgb(198, 219, 174);\
}\
.ace-laravel-contrast .ace_marker-layer .ace_bracket {\
margin: -1px 0 0 -1px;\
border: 1px solid #3b3a32;\
}\
.ace-laravel-contrast .ace_marker-layer .ace_active-line {\
background: #151515;\
}\
.ace-laravel-contrast .ace_gutter-active-line {\
background-color: #151515;\
}\
.ace-laravel-contrast .ace_marker-layer .ace_selected-word {\
border: 1px solid #cd724e;\
}\
.ace-laravel-contrast .ace_fold {\
background-color: #FC580C;\
border-color: #ffffff;\
}\
.ace-laravel-contrast .ace_keyword{color:#FFA927;}.ace-laravel-contrast .ace_keyword.ace_other.ace_unit{color:#FFC48C;}.ace-laravel-contrast .ace_constant.ace_language{color:#FC6B0A;}.ace-laravel-contrast .ace_constant.ace_numeric{color:#FC580C;}.ace-laravel-contrast .ace_constant.ace_character{color:#FC6B0A;}.ace-laravel-contrast .ace_constant.ace_other{color:#FC6B0A;}.ace-laravel-contrast .ace_support.ace_function{color:#FFC48C;}.ace-laravel-contrast .ace_support.ace_constant{color:#FC6B0A;}.ace-laravel-contrast .ace_support.ace_constant.ace_property-value{color:#FDCA49;}.ace-laravel-contrast .ace_support.ace_class{font-style:italic;\
color:#FC6B0A;}.ace-laravel-contrast .ace_support.ace_type{font-style:italic;\
color:#FC6B0A;}.ace-laravel-contrast .ace_storage{color:#FC6B0A;}.ace-laravel-contrast .ace_storage.ace_type{color:#FFC48C;}.ace-laravel-contrast .ace_invalid{color:#f8f8f0;\
background-color:#00a8c6;}.ace-laravel-contrast .ace_invalid.ace_deprecated{color:#f8f8f0;\
background-color:#00a8c6;}.ace-laravel-contrast .ace_string{color:#FDCA49;}.ace-laravel-contrast .ace_comment{color:#615953;}.ace-laravel-contrast .ace_variable{color:#FC580C;}.ace-laravel-contrast .ace_variable.ace_parameter{font-style:italic;}.ace-laravel-contrast .ace_entity.ace_other.ace_attribute-name{color:#FC6B0A;}.ace-laravel-contrast .ace_entity.ace_name.ace_function{color:#FC580C;}.ace-laravel-contrast .ace_entity.ace_name.ace_tag{color:#FFC48C;}";

var dom = require("../lib/dom");
dom.importCssString(exports.cssText, exports.cssClass);
});
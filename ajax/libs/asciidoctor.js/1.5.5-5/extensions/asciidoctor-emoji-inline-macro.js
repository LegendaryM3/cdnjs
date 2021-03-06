/* Generated by Opal 0.11.0.dev */
Opal.modules["emoji-inline-macro/extension"] = function(Opal) {
  function $rb_minus(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs - rhs : lhs['$-'](rhs);
  }
  function $rb_times(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs * rhs : lhs['$*'](rhs);
  }
  function $rb_ge(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs >= rhs : lhs['$>='](rhs);
  }
  function $rb_lt(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs < rhs : lhs['$<'](rhs);
  }
  var self = Opal.top, $scope = Opal, $scopes = [Opal], nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice, $klass = Opal.klass, $hash2 = Opal.hash2, $send = Opal.send;

  Opal.add_stubs(['$==', '$include', '$use_dsl', '$named', '$name_positional_attributes', '$default=', '$-', '$document', '$[]', '$attributes', '$attr?', '$key?', '$attr', '$image_uri', '$tr', '$at_location', '$join', '$dirname', '$handle_stylesheet', '$read_asset', '$*', '$chomp', '$normalize_system_path', '$>=', '$safe', '$!=', '$<', '$open', '$write']);
  
  if (Opal.const_get($scopes, 'RUBY_ENGINE', true, true)['$==']("opal")) {
    } else {
    nil
  };
  self.$include(Opal.const_get([Opal.Object.$$scope], 'Asciidoctor', true, true));
  (function($base, $super, $visibility_scopes) {
    function $EmojiInlineMacro(){};
    var self = $EmojiInlineMacro = $klass($base, $super, 'EmojiInlineMacro', $EmojiInlineMacro);

    var def = self.$$proto, $scope = self.$$scope, $scopes = $visibility_scopes.slice().concat($scope), TMP_EmojiInlineMacro_process_1, $writer = nil;

    
    self.$use_dsl();
    self.$named("emoji");
    self.$name_positional_attributes("size");
    Opal.cdecl($scope, 'SIZE_MAP', $hash2(["1x", "lg", "2x", "3x", "4x", "5x"], {"1x": 17, "lg": 24, "2x": 34, "3x": 50, "4x": 68, "5x": 85}));
    
    $writer = [24];
    $send(Opal.const_get($scopes, 'SIZE_MAP', true, true), 'default=', Opal.to_a($writer));
    $writer[$rb_minus($writer["length"], 1)];;
    return (Opal.defn(self, '$process', TMP_EmojiInlineMacro_process_1 = function $$process(parent, target, attributes) {
      var $a, self = this, doc = nil, slash = nil, size = nil, cdn = nil, qtarget = nil, size_class = nil, emoji_name = nil;

      
      doc = parent.$document();
      if (doc.$attributes()['$[]']("emoji")['$==']("tortue")) {
        
        slash = (function() {if ((($a = doc['$attr?']("htmlsyntax", "xml")) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
          return "/"
          } else {
          return nil
        }; return nil; })();
        size = Opal.const_get($scopes, 'SIZE_MAP', true, true)['$[]'](attributes['$[]']("size"));
        cdn = (function() {if ((($a = attributes['$key?']("cdn")) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
          return attributes['$[]']("cdn")
          } else {
          
          return doc.$attr("emoji-cdn", "http://www.tortue.me/emoji/");
        }; return nil; })();
        qtarget = "" + (cdn) + (target) + ".png";
        return "" + "<img src=\"" + (parent.$image_uri(qtarget, nil)) + "\" height=\"" + (size) + "\" width=\"" + (size) + "\"" + (slash) + ">";
        } else {
        
        size_class = (function() {if ((($a = (size = attributes['$[]']("size"))) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
          return "" + " twa-" + (size)
          } else {
          return nil
        }; return nil; })();
        emoji_name = target.$tr("_", "-");
        return "" + "<i class=\"twa" + (size_class) + " twa-" + (emoji_name) + "\"></i>";
      };
    }, TMP_EmojiInlineMacro_process_1.$$arity = 3), nil) && 'process';
  })($scope.base, Opal.const_get([Opal.const_get($scopes, 'Extensions', true, true).$$scope], 'InlineMacroProcessor', true, true), $scopes);
  return (function($base, $super, $visibility_scopes) {
    function $EmojiAssetsDocinfoProcessor(){};
    var self = $EmojiAssetsDocinfoProcessor = $klass($base, $super, 'EmojiAssetsDocinfoProcessor', $EmojiAssetsDocinfoProcessor);

    var def = self.$$proto, $scope = self.$$scope, $scopes = $visibility_scopes.slice().concat($scope), TMP_EmojiAssetsDocinfoProcessor_process_2, TMP_EmojiAssetsDocinfoProcessor_handle_stylesheet_4;

    
    self.$use_dsl();
    self.$at_location("header");
    Opal.defn(self, '$process', TMP_EmojiAssetsDocinfoProcessor_process_2 = function $$process(doc) {
      var $a, self = this, extdir = nil, stylesheet_name = nil, stylesheet_href = nil, content = nil;

      if (doc.$attributes()['$[]']("emoji")['$==']("tortue")) {
        return nil
        } else {
        
        extdir = Opal.const_get([Opal.Object.$$scope], 'File', true, true).$join(Opal.const_get([Opal.Object.$$scope], 'File', true, true).$dirname("emoji-inline-macro/extension"));
        stylesheet_name = "twemoji-awesome.css";
        if ((($a = doc['$attr?']("linkcss")) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
          
          stylesheet_href = self.$handle_stylesheet(doc, extdir, stylesheet_name);
          return "" + "<link rel=\"stylesheet\" href=\"" + (stylesheet_href) + "\">";
          } else {
          
          content = doc.$read_asset("" + (extdir) + "/" + (stylesheet_name));
          return $rb_times(["<style>", content.$chomp(), "</style>"], "\n");
        };
      }
    }, TMP_EmojiAssetsDocinfoProcessor_process_2.$$arity = 1);
    return (Opal.defn(self, '$handle_stylesheet', TMP_EmojiAssetsDocinfoProcessor_handle_stylesheet_4 = function $$handle_stylesheet(doc, extdir, stylesheet_name) {
      var $a, $b, $c, TMP_3, self = this, outdir = nil, stylesoutdir = nil, destination = nil, content = nil;

      
      outdir = (function() {if ((($a = doc['$attr?']("outdir")) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
        
        return doc.$attr("outdir");
        } else {
        
        return doc.$attr("docdir");
      }; return nil; })();
      stylesoutdir = doc.$normalize_system_path(doc.$attr("stylesdir"), outdir, (function() {if ((($a = $rb_ge(doc.$safe(), Opal.const_get([Opal.const_get($scopes, 'SafeMode', true, true).$$scope], 'SAFE', true, true))) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
        return outdir
        } else {
        return nil
      }; return nil; })());
      if ((($a = ($b = ($c = stylesoutdir['$!='](extdir), $c !== false && $c !== nil && $c != null ?$rb_lt(doc.$safe(), Opal.const_get([Opal.const_get($scopes, 'SafeMode', true, true).$$scope], 'SECURE', true, true)) : $c), $b !== false && $b !== nil && $b != null ?doc['$attr?']("copycss") : $b)) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
        
        destination = doc.$normalize_system_path(stylesheet_name, stylesoutdir, (function() {if ((($a = $rb_ge(doc.$safe(), Opal.const_get([Opal.const_get($scopes, 'SafeMode', true, true).$$scope], 'SAFE', true, true))) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
          return outdir
          } else {
          return nil
        }; return nil; })());
        content = doc.$read_asset("" + (extdir) + "/" + (stylesheet_name));
        $send(Opal.const_get([Opal.Object.$$scope], 'File', true, true), 'open', [destination, "w"], (TMP_3 = function(f){var self = TMP_3.$$s || this;
if (f == null) f = nil;
        return f.$write(content)}, TMP_3.$$s = self, TMP_3.$$arity = 1, TMP_3));
        return destination;
        } else {
        return "" + "./" + (stylesheet_name)
      };
    }, TMP_EmojiAssetsDocinfoProcessor_handle_stylesheet_4.$$arity = 3), nil) && 'handle_stylesheet';
  })($scope.base, Opal.const_get([Opal.const_get($scopes, 'Extensions', true, true).$$scope], 'DocinfoProcessor', true, true), $scopes);
};

/* Generated by Opal 0.11.0.dev */
(function(Opal) {
  var TMP_1, self = Opal.top, $scope = Opal, $scopes = [Opal], nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice, $send = Opal.send;

  Opal.add_stubs(['$==', '$require', '$register', '$basebackend?', '$inline_macro', '$docinfo_processor']);
  
  if (Opal.const_get($scopes, 'RUBY_ENGINE', true, true)['$==']("opal")) {
    
    self.$require("emoji-inline-macro/extension");
    } else {
    nil
  };
  return $send(Opal.const_get([Opal.const_get($scopes, 'Asciidoctor', true, true).$$scope], 'Extensions', true, true), 'register', [], (TMP_1 = function(){var self = TMP_1.$$s || this, $a;
    if (self.document == null) self.document = nil;

  if ((($a = self.document['$basebackend?']("html")) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
      
      self.$inline_macro(Opal.const_get($scopes, 'EmojiInlineMacro', true, true));
      return self.$docinfo_processor(Opal.const_get($scopes, 'EmojiAssetsDocinfoProcessor', true, true));
      } else {
      return nil
    }}, TMP_1.$$s = self, TMP_1.$$arity = 0, TMP_1));
})(Opal);

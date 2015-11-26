BIN := ./node_modules/.bin
BROWSERIFY := $(BIN)/browserify
ESLINT := $(BIN)/eslint
DUO := $(BIN)/duo

#
# Default.
#

default: example node_modules test-style

#
# Example.
#

example: node_modules
	@$(BROWSERIFY) example/index.js -t [ babelify --presets [ es2015 react ] ] > example/build.js
	@$(DUO) lib/index.css --stdout > example/build.css

#
# Test style.
#

test-style:
	@$(ESLINT) ./lib

#
# Dependencies.
#

node_modules: package.json
	@npm install

#
# Clean.
#

clean:
	@rm example/build.js example/build.css
	@rm -rf *.log
	
#
# Clean dependencies.
#

clean-deps:
	@rm -rf node_modules components

#
# Phonies.
#

.PHONY: example test-style

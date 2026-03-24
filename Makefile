.PHONY: dev build test test-bdd test-bdd-ci clean install-deps

# Development
dev:
	npm run dev

# Build for production
build:
	npm run build

# Install Playwright system dependencies (run once on new machines)
install-deps:
	npx playwright install-deps

# Run all tests
test: test-bdd

# Run BDD tests in dev mode (requires `make dev` running in another terminal)
test-bdd:
	npx bddgen && npx playwright test

# Run BDD tests with UI mode for debugging
test-bdd-ui:
	npx bddgen && npx playwright test --ui

# Run BDD tests in headed mode (see the browser)
test-bdd-headed:
	npx bddgen && npx playwright test --headed

# Run BDD tests in CI mode (spawns Tauri binary automatically)
test-bdd-ci:
	CI=true npx bddgen && CI=true npx playwright test

# Clean generated files
clean:
	rm -rf .features-gen/
	rm -rf node_modules/.cache/

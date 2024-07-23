# Generates examples in nodes.tsx from a local copy of the openapi spec. Make sure you pull the latest changes
# in the substrate repo and run `make generate` in that repo before running this script.

generate:
	poetry run python codegen/guides_generate.py
	npx prettier --write ./components/nodes.tsx

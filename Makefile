build:
	docker compose -f compose-dev.yaml build
up_react19:
	docker compose -f compose-dev.yaml up react19
down_react19:
	docker compose -f compose-dev.yaml down react19
down_all_volumes:
	docker compose -f compose-dev.yaml down -v

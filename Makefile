build:
	docker compose -f compose-dev.yaml build
run_react19:
	docker compose -f compose-dev.yaml up react19 -d
down_react19:
	docker compose -f compose-dev.yaml down react19
down_all_volumes:
	docker compose -f compose-dev.yaml down -v

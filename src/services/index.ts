import { ContainerBuilder } from "node-dependency-injection";
import { ResponseService } from "./response";
import { CycleService } from "./cycle";

// Init services
export async function di(): Promise<ContainerBuilder> {
    const container = new ContainerBuilder();
    container.register("service.responseService", ResponseService);
    container
        .register("service.cycleService", CycleService)
        .addArgument(container.get("service.responseService"))
    return container;
}

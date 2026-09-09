import ServicePage, { serviceMetadata } from "../ServicePage";
import { services } from "../data";
export const metadata = serviceMetadata(services.epoxy);
export default function Page() { return <ServicePage service={services.epoxy} />; }

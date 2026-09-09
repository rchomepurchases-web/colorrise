import ServicePage, { serviceMetadata } from "../ServicePage";
import { services } from "../data";
export const metadata = serviceMetadata(services.commercial);
export default function Page() { return <ServicePage service={services.commercial} />; }

import ServicePage, { serviceMetadata } from "../ServicePage";
import { services } from "../data";
export const metadata = serviceMetadata(services.interior);
export default function Page() { return <ServicePage service={services.interior} />; }

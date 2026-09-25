import ServiceAreaPage, { serviceAreaMetadata } from "../ServiceAreaPage";
import { serviceAreas } from "../data";
export const metadata = serviceAreaMetadata(serviceAreas.tempe);
export default function Page() { return <ServiceAreaPage area={serviceAreas.tempe} />; }

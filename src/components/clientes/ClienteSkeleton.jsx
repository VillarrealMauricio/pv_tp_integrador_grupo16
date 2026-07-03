import { Card, Placeholder } from 'react-bootstrap';

const ClienteSkeleton = () => {
    return (
        <Card className="h-100 rounded-4 shadow-sm border-light-subtle">
            <Card.Body className="p-4 d-flex flex-column">
                <div className="d-flex justify-content-between align-items-start mb-3">
                    <Placeholder as="div" animation="glow">
                        <Placeholder xs={12} className="rounded-circle" style={{ width: '48px', height: '48px' }} />
                    </Placeholder>
                    <Placeholder as="div" animation="glow" className="w-25">
                        <Placeholder xs={12} className="rounded-pill p-2" />
                    </Placeholder>
                </div>
                <Placeholder as="h5" animation="glow" className="mb-3">
                    <Placeholder xs={8} className="rounded" />
                </Placeholder>
                <div className="d-flex flex-column gap-3 mb-4 mt-auto">
                    <Placeholder as="div" animation="glow">
                        <Placeholder xs={9} className="rounded" />
                    </Placeholder>
                    <Placeholder as="div" animation="glow">
                        <Placeholder xs={6} className="rounded" />
                    </Placeholder>
                </div>
                <Placeholder.Button variant="light" className="w-100 rounded-pill mt-auto" aria-hidden="true" />
            </Card.Body>
        </Card>
    );
};

export default ClienteSkeleton;
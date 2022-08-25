import { isMobile } from 'react-device-detect';



export default [
    {
        selector: '.first-step-a',
        content: () => (
            <div>
                <p className="color-primary" style={{ fontSize: '1rem', textAlign: 'center' }}>
                    SETZE EIN ZEICHEN FÜR CHANCENGLEICHHEIT BEI DER JOBSUCHE.
                </p>
            </div>
        ),
        position: 'center',
    },
    {
        selector: '.first-step-b',
        content: 'Deinen Namen eingeben...',

    },
    {
        selector: '.second-step',
        content: `Sprache auswählen...`
    },
    {
        selector: '.third-step',
        content: `Namen generieren...`
    },
    {
        selector: '.fourth-step',
        content: () => {
            if (isMobile) {
                return `Motiv screenshoten und auf Social Media teilen 📱`;
            } else {
                return `Motiv downloaden und auf Social Media teilen!`;
            }
        }

    }

]
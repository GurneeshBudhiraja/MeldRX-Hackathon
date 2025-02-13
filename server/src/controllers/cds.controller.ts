import { Request, Response } from "express";
import { FRONTEND_URL } from "../config/env"

// Discovery endpoint controller
export function discoveryController(req: Request, res: Response) {
  res.status(200).json({
    services: [{
      hook: "patient-view",
      id: "0001",
      description: "MedAI-Patient View",
      prefetch: {
        patient: "Patient/{{context.patientId}}",
        conditions:
          "Condition?patient={{context.patientId}}",
      },
    },]
  })
}


export function ehrCardController(req: Request, res: Response) {
  const patient = req.body.prefetch.patient;

  // gets the patient name from the prefetch data
  const firstName = patient.name[0].given[0];
  const lastName = patient.name[0].family;

  res.json({
    cards: [
      {
        summary: `Hello, ${firstName} ${lastName}`,
        indicator: "critical",
        source: {
          label: "MedAI",
          // Logo of the application
          icon: "https://picsum.photos/200/300",
        },
        links: [
          {
            label: "MedAI",
            url: `${FRONTEND_URL}/launch`,
            type: "smart",
          },
        ],
      },
    ],
  });

}
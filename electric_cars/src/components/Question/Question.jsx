import React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const Question = () => {
  return (
    <div className="max-w-3xl mx-auto my-12 px-4">

      <h2 className="text-center text-3xl font-bold mb-8 text-gray-800">
        ❓ Ən çox verilən suallar
      </h2>

      <div className="space-y-4">
        <Accordion
          className="!rounded-xl !shadow-md hover:!shadow-lg transition"
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className="font-semibold">
              Maşını qızdırmağa ehtiyac var?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            Elektrikli maşınlarda klassik benzinli avtomobillər kimi qızdırma ehtiyacı yoxdur. Sadəcə qışda ilk 1-2 dəqiqə yumşaq sürmək kifayətdir.
          </AccordionDetails>
        </Accordion>

        <Accordion
          className="!rounded-xl !shadow-md hover:!shadow-lg transition"
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className="font-semibold">
              Hansı rejimdə sürmək lazımdır?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            Ən çox istifadə olunan “Eco” və “Normal” rejimləridir. Eco daha çox enerji qənaət edir, Normal isə balanslı sürüş verir.
          </AccordionDetails>
        </Accordion>

        <Accordion
          className="!rounded-xl !shadow-md hover:!shadow-lg transition"
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className="font-semibold">
              Hər gün şarj etmək lazımdır?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            Xeyr. Batareya 20–30% səviyyəsinə düşəndə şarj etmək daha uyğundur. Hər gün şarj etmək məcburi deyil.
          </AccordionDetails>
        </Accordion>

        <Accordion
          className="!rounded-xl !shadow-md hover:!shadow-lg transition"
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className="font-semibold">
              Hansı tip adapter istifadə olunur?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            Ev və gündəlik istifadə üçün GB/T AC və ya Type 2 adapter istifadə olunur. Sürətli şarj üçün isə CCS DC stansiyaları istifadə edilir.
          </AccordionDetails>
        </Accordion>
    <Accordion
          className="!rounded-xl !shadow-md hover:!shadow-lg transition"
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className="font-semibold">
              Hansı tip benzinden istifadə olunur?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            Böyük kütlə AI-95 benzindən istifadə edir.
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  )
}

export default Question
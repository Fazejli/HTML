import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { CheckCircle2, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { cn } from '@/lib/utils';

const reservationSchema = z.object({
  nom: z.string().min(2, 'Le nom est requis').max(100),
  telephone: z.string().min(10, 'Numéro de téléphone invalide'),
  email: z.string().email('Email invalide'),
  article: z.string().min(2, 'Type d\'article requis'),
  reference: z.string().min(2, 'Référence requise'),
  dateMax: z.string().min(1, 'Date requise'),
  secondeMain: z.boolean().default(false),
  message: z.string().min(10, 'Message trop court').max(1000),
});

type ReservationFormData = z.infer<typeof reservationSchema>;

export function ReservationSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<ReservationFormData | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ReservationFormData>({
    resolver: zodResolver(reservationSchema),
  });

  const onSubmit = async (data: ReservationFormData) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    setSubmittedData(data);
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 6000);
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <section className="py-20 pt-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight">
            Pour réserver
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Remplissez le formulaire et nous vous recontacterons rapidement
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-xl mx-auto"
        >
          <div className="glass-card rounded-2xl p-8">
            <AnimatePresence mode="wait">
              {isSubmitted && submittedData && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mb-6 p-4 rounded-lg bg-green-50 border border-green-200 flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-green-800">Demande envoyée !</p>
                    <p className="text-green-700 text-sm mt-1">
                      Merci {submittedData.nom}, nous vous contacterons au {submittedData.telephone} concernant l'article "{submittedData.article}".
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="nom">
                  Nom complet <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="nom"
                  {...register('nom')}
                  className={cn(errors.nom && 'border-destructive')}
                />
                {errors.nom && (
                  <p className="text-sm text-destructive">{errors.nom.message}</p>
                )}
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="telephone">
                    Téléphone <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="telephone"
                    type="tel"
                    placeholder="+212 XXX-XXXXXX"
                    {...register('telephone')}
                    className={cn(errors.telephone && 'border-destructive')}
                  />
                  {errors.telephone && (
                    <p className="text-sm text-destructive">{errors.telephone.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">
                    Email <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    {...register('email')}
                    className={cn(errors.email && 'border-destructive')}
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="article">
                    Type d'article <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="article"
                    {...register('article')}
                    className={cn(errors.article && 'border-destructive')}
                  />
                  {errors.article && (
                    <p className="text-sm text-destructive">{errors.article.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="reference">
                    Référence article <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="reference"
                    placeholder="Ex: AIG-2024-001"
                    {...register('reference')}
                    className={cn(errors.reference && 'border-destructive')}
                  />
                  {errors.reference && (
                    <p className="text-sm text-destructive">{errors.reference.message}</p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="dateMax">
                  Date limite souhaitée <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="dateMax"
                  type="date"
                  min={today}
                  {...register('dateMax')}
                  className={cn(errors.dateMax && 'border-destructive')}
                />
                {errors.dateMax && (
                  <p className="text-sm text-destructive">{errors.dateMax.message}</p>
                )}
              </div>

              <div className="flex items-center space-x-3">
                <Checkbox id="secondeMain" {...register('secondeMain')} />
                <Label htmlFor="secondeMain" className="font-normal cursor-pointer">
                  Produits de seconde main acceptés
                </Label>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">
                  Message <span className="text-destructive">*</span>
                </Label>
                <Textarea
                  id="message"
                  placeholder="Décrivez votre besoin, quantité..."
                  rows={4}
                  {...register('message')}
                  className={cn(errors.message && 'border-destructive')}
                />
                {errors.message && (
                  <p className="text-sm text-destructive">{errors.message.message}</p>
                )}
              </div>

              <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Envoi en cours...
                  </>
                ) : (
                  'Envoyer la demande'
                )}
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

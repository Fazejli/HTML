import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { CheckCircle2, Loader2, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { cn } from '@/lib/utils';

const contactSchema = z.object({
  nom: z.string().optional(),
  email: z.string().email('Email invalide').optional().or(z.literal('')),
  typeMessage: z.string().min(1, 'Sélectionnez un type de message'),
  note: z.string().optional(),
  message: z.string().min(10, 'Message trop court').max(1000),
});

type ContactFormData = z.infer<typeof contactSchema>;

const messageTypes = [
  { value: 'avis', label: 'Laisser un avis' },
  { value: 'amelioration', label: 'Suggérer une amélioration' },
  { value: 'question', label: 'Poser une question' },
  { value: 'reclamation', label: 'Réclamation' },
];

const ratings = [
  { value: '5', label: 'Excellent', stars: 5 },
  { value: '4', label: 'Très bien', stars: 4 },
  { value: '3', label: 'Bien', stars: 3 },
  { value: '2', label: 'Moyen', stars: 2 },
  { value: '1', label: 'Insuffisant', stars: 1 },
];

export function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedType, setSelectedType] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitted(true);
    reset();
    setSelectedType('');
    setTimeout(() => setIsSubmitted(false), 6000);
  };

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
            Contact & Avis
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Laissez-nous un message, un avis ou une suggestion
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
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mb-6 p-4 rounded-lg bg-green-50 border border-green-200 flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-green-800">Message envoyé !</p>
                    <p className="text-green-700 text-sm mt-1">
                      Merci pour votre retour, nous vous répondrons rapidement.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="nom">Nom (optionnel)</Label>
                  <Input
                    id="nom"
                    placeholder="Anonyme"
                    {...register('nom')}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email (optionnel)</Label>
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

              <div className="space-y-2">
                <Label>
                  Type de message <span className="text-destructive">*</span>
                </Label>
                <Select
                  value={selectedType}
                  onValueChange={(value) => {
                    setSelectedType(value);
                    setValue('typeMessage', value);
                  }}
                >
                  <SelectTrigger className={cn(errors.typeMessage && 'border-destructive')}>
                    <SelectValue placeholder="Sélectionnez" />
                  </SelectTrigger>
                  <SelectContent>
                    {messageTypes.map((type) => (
                      <SelectItem key={type.value} value={type.value}>
                        {type.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.typeMessage && (
                  <p className="text-sm text-destructive">{errors.typeMessage.message}</p>
                )}
              </div>

              <AnimatePresence mode="wait">
                {selectedType === 'avis' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="space-y-2 overflow-hidden"
                  >
                    <Label>Note</Label>
                    <Select
                      onValueChange={(value) => setValue('note', value)}
                      defaultValue="5"
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {ratings.map((rating) => (
                          <SelectItem key={rating.value} value={rating.value}>
                            <span className="flex items-center gap-2">
                              <span className="flex">
                                {Array.from({ length: rating.stars }).map((_, i) => (
                                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                                ))}
                              </span>
                              <span>{rating.label} ({rating.value}/5)</span>
                            </span>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="space-y-2">
                <Label htmlFor="message">
                  Votre message <span className="text-destructive">*</span>
                </Label>
                <Textarea
                  id="message"
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
                  'Envoyer'
                )}
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

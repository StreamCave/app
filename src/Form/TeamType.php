<?php

namespace App\Form;

use App\Entity\Team;
use App\Entity\Flag;
use App\Entity\Player;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class TeamType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('teamName')
            ->add('teamLogo')
            ->add('teamIDFlag', EntityType::class, ['class' => Flag::class,
            'choice_label' => 'flag_name',
            'label' => 'Pays'])
            ->add('players', EntityType::class, ['class' => Player::class,
            'choice_label' => 'player_name',
            'multiple' => true,
            'label' => 'Player'])
            ->add('gameTeamAlpha')
            ->add('gameTeamBeta')
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Team::class,
        ]);
    }
}
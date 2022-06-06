<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\GameRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ApiResource()
 * @ORM\Entity(repositoryClass=GameRepository::class)
 */
class Game
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity=Team::class, inversedBy="games")
     * @ORM\JoinColumn(nullable=false)
     */
    private $gameIdTeamAlpha;

    /**
     * @ORM\ManyToOne(targetEntity=Team::class, inversedBy="gamesBeta")
     * @ORM\JoinColumn(nullable=false)
     */
    private $gameIdTeamBeta;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $gameTimeNext;

    /**
     * @ORM\ManyToOne(targetEntity=Format::class)
     * @ORM\JoinColumn(nullable=false)
     */
    private $gameFormat;

    /**
     * @ORM\ManyToOne(targetEntity=Status::class, inversedBy="games")
     * @ORM\JoinColumn(nullable=false)
     */
    private $gameStatus;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $gameScoreTeamAlpha;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $gameScoreTeamBeta;

    /**
     * @ORM\ManyToMany(targetEntity=Map::class)
     */
    private $gameIdMaps;

    public function __construct()
    {
        $this->gameIdMaps = new ArrayCollection();
    }

    public function __toString()
    {
        return $this->gameFormat;
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getGameIdTeamAlpha(): ?Team
    {
        return $this->gameIdTeamAlpha;
    }

    public function setGameIdTeamAlpha(?Team $gameIdTeamAlpha): self
    {
        $this->gameIdTeamAlpha = $gameIdTeamAlpha;

        return $this;
    }

    public function getGameIdTeamBeta(): ?Team
    {
        return $this->gameIdTeamBeta;
    }

    public function setGameIdTeamBeta(?Team $gameIdTeamBeta): self
    {
        $this->gameIdTeamBeta = $gameIdTeamBeta;

        return $this;
    }

    public function getGameTimeNext(): ?\DateTimeInterface
    {
        return $this->gameTimeNext;
    }

    public function setGameTimeNext(?\DateTimeInterface $gameTimeNext): self
    {
        $this->gameTimeNext = $gameTimeNext;

        return $this;
    }

    public function getGameFormat(): ?Format
    {
        return $this->gameFormat;
    }

    public function setGameFormat(?Format $gameFormat): self
    {
        $this->gameFormat = $gameFormat;

        return $this;
    }

    public function getGameStatus(): ?Status
    {
        return $this->gameStatus;
    }

    public function setGameStatus(?Status $gameStatus): self
    {
        $this->gameStatus = $gameStatus;

        return $this;
    }

    public function getGameScoreTeamAlpha(): ?int
    {
        return $this->gameScoreTeamAlpha;
    }

    public function setGameScoreTeamAlpha(?int $gameScoreTeamAlpha): self
    {
        $this->gameScoreTeamAlpha = $gameScoreTeamAlpha;

        return $this;
    }

    public function getGameScoreTeamBeta(): ?int
    {
        return $this->gameScoreTeamBeta;
    }

    public function setGameScoreTeamBeta(?int $gameScoreTeamBeta): self
    {
        $this->gameScoreTeamBeta = $gameScoreTeamBeta;

        return $this;
    }

    /**
     * @return Collection<int, Map>
     */
    public function getGameIdMaps(): Collection
    {
        return $this->gameIdMaps;
    }

    public function addGameIdMap(Map $gameIdMap): self
    {
        if (!$this->gameIdMaps->contains($gameIdMap)) {
            $this->gameIdMaps[] = $gameIdMap;
        }

        return $this;
    }

    public function removeGameIdMap(Map $gameIdMap): self
    {
        $this->gameIdMaps->removeElement($gameIdMap);

        return $this;
    }
}
